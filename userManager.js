// User Management System for NUTRIJUDGE
class UserManager {
    constructor() {
        this.users = this.loadUsers();
        this.currentUser = this.loadCurrentUser();
    }

    // Load users from localStorage
    loadUsers() {
        const users = localStorage.getItem('nutrijudgeUsers');
        return users ? JSON.parse(users) : [];
    }

    // Save users to localStorage
    saveUsers() {
        localStorage.setItem('nutrijudgeUsers', JSON.stringify(this.users));
    }

    // Load current user from localStorage
    loadCurrentUser() {
        const currentUser = localStorage.getItem('nutrijudgeCurrentUser');
        return currentUser ? JSON.parse(currentUser) : null;
    }

    // Save current user to localStorage
    saveCurrentUser(user) {
        localStorage.setItem('nutrijudgeCurrentUser', JSON.stringify(user));
        this.currentUser = user;
    }

    // Generate unique referral code
    generateReferralCode(firstName, lastName) {
        const timestamp = Date.now().toString().slice(-4);
        const randomChars = Math.random().toString(36).substring(2, 6).toUpperCase();
        const namePrefix = (firstName + lastName).replace(/[^A-Za-z]/g, '').substring(0, 3).toUpperCase();
        
        let referralCode = `${namePrefix}${timestamp}${randomChars}`;
        
        // Ensure code is unique
        let counter = 1;
        while (this.isReferralCodeExists(referralCode)) {
            referralCode = `${namePrefix}${timestamp}${randomChars}${counter}`;
            counter++;
        }
        
        return referralCode;
    }

    // Check if referral code already exists
    isReferralCodeExists(code) {
        return this.users.some(user => user.referralCode === code);
    }

    // Register new user
    registerUser(userData) {
        // Check if email already exists
        if (this.users.some(user => user.email === userData.email)) {
            throw new Error('Email already registered');
        }

        // Generate referral code
        const referralCode = this.generateReferralCode(userData.firstName, userData.lastName);

        // Create new user object
        const newUser = {
            id: Date.now().toString(),
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            phone: userData.phone,
            password: this.hashPassword(userData.password), // In production, use proper hashing
            referralCode: referralCode,
            referredBy: userData.referredBy || null,
            referralCount: 0,
            totalEarned: 0,
            referralHistory: [],
            registrationDate: new Date().toISOString(),
            lastLogin: null,
            isActive: true
        };

        // Add user to users array
        this.users.push(newUser);
        this.saveUsers();

        // If user was referred by someone, update referrer's stats
        if (userData.referredBy) {
            this.updateReferrerStats(userData.referredBy, newUser);
        }

        return newUser;
    }

    // Update referrer's statistics
    updateReferrerStats(referralCode, newUser) {
        const referrer = this.users.find(user => user.referralCode === referralCode);
        if (referrer) {
            referrer.referralCount++;
            referrer.referralHistory.push({
                referredUserId: newUser.id,
                referredUserName: `${newUser.firstName} ${newUser.lastName}`,
                referredUserEmail: newUser.email,
                date: new Date().toISOString(),
                status: 'pending', // pending, completed, failed
                reward: 0
            });
            this.saveUsers();
        }
    }

    // Login user
    loginUser(email, password) {
        const user = this.users.find(u => u.email === email && this.verifyPassword(password, u.password));
        
        if (!user) {
            throw new Error('Invalid email or password');
        }

        if (!user.isActive) {
            throw new Error('Account is deactivated');
        }

        // Update last login
        user.lastLogin = new Date().toISOString();
        this.saveUsers();

        // Set current user
        this.saveCurrentUser(user);

        return user;
    }

    // Logout user
    logoutUser() {
        this.saveCurrentUser(null);
    }

    // Get current user
    getCurrentUser() {
        return this.currentUser;
    }

    // Check if user is logged in
    isLoggedIn() {
        return this.currentUser !== null;
    }

    // Get user by referral code
    getUserByReferralCode(code) {
        return this.users.find(user => user.referralCode === code);
    }

    // Update user profile
    updateUserProfile(userId, profileData) {
        const userIndex = this.users.findIndex(user => user.id === userId);
        if (userIndex === -1) {
            throw new Error('User not found');
        }

        // Update allowed fields
        const allowedFields = ['firstName', 'lastName', 'phone'];
        allowedFields.forEach(field => {
            if (profileData[field] !== undefined) {
                this.users[userIndex][field] = profileData[field];
            }
        });

        this.saveUsers();

        // Update current user if it's the same user
        if (this.currentUser && this.currentUser.id === userId) {
            this.saveCurrentUser(this.users[userIndex]);
        }

        return this.users[userIndex];
    }

    // Get referral statistics
    getReferralStats(userId) {
        const user = this.users.find(u => u.id === userId);
        if (!user) {
            throw new Error('User not found');
        }

        const completedReferrals = user.referralHistory.filter(ref => ref.status === 'completed');
        const pendingReferrals = user.referralHistory.filter(ref => ref.status === 'pending');
        const totalEarned = completedReferrals.reduce((sum, ref) => sum + ref.reward, 0);

        return {
            totalReferrals: user.referralCount,
            completedReferrals: completedReferrals.length,
            pendingReferrals: pendingReferrals.length,
            totalEarned: totalEarned,
            referralHistory: user.referralHistory
        };
    }

    // Mark referral as completed (when referred user makes first purchase)
    completeReferral(referralCode, referredUserId) {
        const referrer = this.users.find(user => user.referralCode === referralCode);
        if (!referrer) {
            throw new Error('Referrer not found');
        }

        const referralIndex = referrer.referralHistory.findIndex(ref => ref.referredUserId === referredUserId);
        if (referralIndex === -1) {
            throw new Error('Referral not found');
        }

        // Update referral status and add reward
        referrer.referralHistory[referralIndex].status = 'completed';
        referrer.referralHistory[referralIndex].reward = 500; // ₹500 reward
        referrer.referralHistory[referralIndex].completedDate = new Date().toISOString();
        referrer.totalEarned += 500;

        this.saveUsers();

        // Update current user if it's the same user
        if (this.currentUser && this.currentUser.id === referrer.id) {
            this.saveCurrentUser(referrer);
        }

        return referrer.referralHistory[referralIndex];
    }

    // Simple password hashing (for demo purposes - use proper hashing in production)
    hashPassword(password) {
        return btoa(password); // Base64 encoding (NOT secure for production)
    }

    // Verify password
    verifyPassword(password, hashedPassword) {
        return this.hashPassword(password) === hashedPassword;
    }

    // Get all users (for admin purposes)
    getAllUsers() {
        return this.users.map(user => ({
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            referralCode: user.referralCode,
            referralCount: user.referralCount,
            totalEarned: user.totalEarned,
            registrationDate: user.registrationDate,
            lastLogin: user.lastLogin,
            isActive: user.isActive
        }));
    }

    // Deactivate user
    deactivateUser(userId) {
        const userIndex = this.users.findIndex(user => user.id === userId);
        if (userIndex === -1) {
            throw new Error('User not found');
        }

        this.users[userIndex].isActive = false;
        this.saveUsers();

        // Logout if it's the current user
        if (this.currentUser && this.currentUser.id === userId) {
            this.logoutUser();
        }
    }

    // Reactivate user
    reactivateUser(userId) {
        const userIndex = this.users.findIndex(user => user.id === userId);
        if (userIndex === -1) {
            throw new Error('User not found');
        }

        this.users[userIndex].isActive = true;
        this.saveUsers();
    }
}

// Create global instance
const userManager = new UserManager();

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = UserManager;
} 
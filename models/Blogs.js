const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Blog = sequelize.define('Blog', {
    title: {
        type: DataTypes.TEXT,
    },
    date: {
        type: DataTypes.DATE,
    },
    category: {
        type: DataTypes.STRING,
    },
    content: {
        type: DataTypes.STRING,
    },
    author: {
        type: DataTypes.STRING,
    },
    excerpt: {
        type: DataTypes.TEXT,
    },
    donationTypeDescription: {
        type: DataTypes.TEXT,
    },
    mainImageUrl: {
        type: DataTypes.STRING,
    }
});

// const dropUsersTable = async () => {
//     try {
//         // Drop the 'Approved' table if it exists
//         await Blog.drop();
//         console.log('Users table dropped successfully.');
//     } catch (error) {
//         console.error('Error dropping Users table:', error);
//     } finally {
//         // Close the Sequelize connection
//         await sequelize.close();
//         console.log('Connection closed.');
//     }
// };

// dropUsersTable();

sequelize.sync()
    .then(() => {
        console.log('Database and tables are synced');
    })
    .catch((error) => {
        console.error('Error syncing database:', error);
    });

module.exports = { Blog };

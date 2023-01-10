module.exports = {
    HOST: "localhost",
    USER: "lokkerroom_admin",
    PASSWORD: "becode20092022",
    DB: "postgres",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 90000,
        idle: 50000
    }
}
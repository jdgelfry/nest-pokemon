export const EnvConfig = () => ({ 
    environment: process.env.NODE_ENV || 'dev',
    mongodb: process.env.MONGODB,
    dbname: process.env.DBNAME,
    port: process.env.PORT || 3001,
    defaultLimit: +process.env.DEFAULT_LIMIT || 10,
})
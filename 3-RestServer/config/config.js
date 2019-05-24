// ========================================
// SEED de autenticación - Semilla.
// En el servidor de producción crear una nueva variable de entorno.
// En terminal del servidor: 'set SEED="nueva-variable-de-entorno"'
// ========================================
process.env.SEED = process.env.SEED || 'gwenhwyvar-menzoberranzan';

// ========================================
// Vencimiento de Token
// ========================================
process.env.CADUCIDAD_TOKEN = '48H';
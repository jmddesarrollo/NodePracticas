/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('recorrido', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING(60),
            allowNull: false,
            unique: true
        }
    }, {
        tableName: 'recorrido',
        timestamps: false
    });
};
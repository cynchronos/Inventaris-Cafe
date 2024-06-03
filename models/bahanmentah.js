'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BahanMentah extends Model {
    static associate(models) {
      BahanMentah.hasMany(models.Transaksi, { foreignKey: 'id' });
    }
  }
  BahanMentah.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey : true,
    },
    nama: DataTypes.STRING,
    kategori: DataTypes.STRING,
    stok: DataTypes.INTEGER,
    satuan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BahanMentah',
    tableName: 'BahanMentah', 
  });
  return BahanMentah;
};

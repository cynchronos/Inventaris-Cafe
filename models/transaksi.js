'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaksi extends Model {
    static associate(models) {
      Transaksi.belongsTo(models.BahanMentah, { foreignKey: 'id' });
    }
  }
  Transaksi.init({
    id_transaksi: {
      type:DataTypes.INTEGER,
      primaryKey: true,
    },
    id: DataTypes.INTEGER,
    jenis: DataTypes.ENUM('masuk', 'keluar'),
    jumlah: DataTypes.INTEGER,
    tanggal: DataTypes.DATE,
    keterangan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Transaksi',
    tableName: "Transaksi"
  });
  return Transaksi;
};

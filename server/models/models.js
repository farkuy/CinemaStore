const sequelize = require('../db');
const {DataTypes} = require(`sequelize`);

const User = sequelize.define(`user`, {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: `USER`},
})

const Basket = sequelize.define(`basket`, {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketContent = sequelize.define(`basket_content`, {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Content = sequelize.define(`content`, {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: false},
})

const Type = sequelize.define(`type`, {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Brand = sequelize.define(`brand`, {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Rating = sequelize.define(`rating`, {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false},
})

const ContentInfo = sequelize.define(`content_info`, {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})

const TypeBrand = sequelize.define(`type_brand`, {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

User.hasOne(Basket);
Basket.belongsTo(User);

User.hasMany(Rating);
Rating.belongsTo(User);

Basket.hasMany(BasketContent);
BasketContent.belongsTo(Basket)

Type.hasMany(Content);
Content.belongsTo(Type);

Brand.hasMany(Content);
Content.belongsTo(Brand);

Content.hasMany(Rating);
Rating.belongsTo(Content);

Content.hasMany(BasketContent);
BasketContent.belongsTo(Content);

Content.hasMany(ContentInfo, {as: 'info'});
ContentInfo.belongsTo(Content);

Type.belongsToMany(Brand, {through: TypeBrand});
Brand.belongsToMany(Type, {through: TypeBrand});

module.exports = {
    User,
    Basket,
    BasketContent,
    Content,
    Type,
    Brand,
    Rating,
    ContentInfo,
    TypeBrand
}

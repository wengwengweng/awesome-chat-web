const Company = require('./company')
const User = require('./user')
const Dep = require('./dep')

Company.belongsTo(User, { foreignKey: 'companyOwnerId', targetKey: 'userId' });
Dep.belongsTo(User, { foreignKey: 'depOwnerId', targetKey: 'userId' });
Dep.belongsTo(Company, { foreignKey: 'companyId', targetKey: 'companyId' });

module.exports = {
  Company,
  User,
  Dep
}
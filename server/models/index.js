const Company = require('./company')
const User = require('./user')
const Dep = require('./dep')
const Admin = require('./admin')
const Message = require('./message')
const Room = require('./room')
const RoomToUser = require('./room_to_user')
const Feedback = require('./feedback')
const Attendance = require('./attendance')

Company.belongsTo(User, { foreignKey: 'companyOwnerId', targetKey: 'userId' });
Dep.belongsTo(User, { foreignKey: 'depOwnerId', targetKey: 'userId' });
User.belongsTo(Dep, { foreignKey: 'depId', targetKey: 'depId' });
Dep.belongsTo(Company, { foreignKey: 'companyId', targetKey: 'companyId' });
RoomToUser.belongsTo(Room, { foreignKey: 'roomId', targetKey: 'roomId' });
RoomToUser.belongsTo(Room, { foreignKey: 'roomMemberId', targetKey: 'roomMemberId' });
RoomToUser.belongsTo(User, { foreignKey: 'userId', targetKey: 'userId' });
Message.belongsTo(Room, { foreignKey: 'MessageToId', targetKey: 'roomMemberId' });
Message.belongsTo(User, { foreignKey: 'MessageFromId', targetKey: 'userId' });

module.exports = {
  Company,
  User,
  Dep,
  Admin,
  Message,
  Room,
  RoomToUser,
  Feedback,
  Attendance
}

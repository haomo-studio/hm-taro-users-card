import Taro from '@tarojs/taro';
export default {
  hmUsersCard: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: Taro.pxTransform(750),
    height: Taro.pxTransform(292)
  },
  container: {
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: Taro.pxTransform(39),
    paddingRight: Taro.pxTransform(37),
    paddingLeft: Taro.pxTransform(64),
    boxShadow: '0px 10px 30px rgba(209, 213, 223, 0.50)',
    backgroundColor: '#ffffff',
    width: Taro.pxTransform(721),
    height: Taro.pxTransform(214)
  },
  usersDetail: { display: 'flex', flexDirection: 'row', marginTop: Taro.pxTransform(49) },
  usersDetailWrap: { display: 'flex', alignItems: 'flex-start', flexDirection: 'column', height: Taro.pxTransform(90) },
  count: {
    opacity: 1,
    marginTop: Taro.pxTransform(14),
    lineHeight: Taro.pxTransform(47),
    whiteSpace: 'nowrap',
    color: '#141821',
    fontFamily: 'Helvetica',
    fontSize: Taro.pxTransform(31),
    fontWeight: 'normal'
  },
  users: {
    opacity: 1,
    marginTop: Taro.pxTransform(2),
    lineHeight: Taro.pxTransform(41),
    whiteSpace: 'nowrap',
    color: '#858997',
    fontFamily: 'Helvetica',
    fontSize: Taro.pxTransform(27),
    fontWeight: 'normal'
  },
  usersDetailImage: { marginTop: Taro.pxTransform(49), width: Taro.pxTransform(273), height: Taro.pxTransform(136) }
};

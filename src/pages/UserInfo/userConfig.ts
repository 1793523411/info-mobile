export enum ShowType {
  Img = 1,
  Text = 2,
  Role = 3,
}

export const RoleMap: Record<string, string> = {
  common: '普通用户',
  admin: '管理员',
};

export const MokcUserInfoData: Record<string, string> = {
  avatar:
    'https://info-share.oss-cn-beijing.aliyuncs.com/avator/ygj111-6212761271712084868-fwefewqfc.jpeg',
  desc: 'desc~~~~~~????',
  email: '1793523411@qq.com',
  nickname: 'micro',
  type: 'common',
  uid: '5577006791947779000',
  username: 'ygj111',
};

export const userInfoMap = [
  {
    label: '用户头像',
    type: ShowType.Img,
    key: 'avatar',
    value: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    label: '用户名',
    type: ShowType.Text,
    key: 'username',
    value: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    label: '用户昵称',
    type: ShowType.Text,
    key: 'nickname',
    value: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    label: '用户签名',
    type: ShowType.Text,
    key: 'desc',
    value: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    label: '用户邮箱',
    type: ShowType.Text,
    key: 'email',
    value: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    label: '用户类型',
    type: ShowType.Role,
    key: 'type',
    value: 'https://reactnative.dev/img/tiny_logo.png',
  },
];

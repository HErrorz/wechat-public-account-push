/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
  // 使用微信测试号：公众号APP_ID
  APP_ID: "wx1fc3d90d08c5f175",

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: "fb9d02dc8e88c9fea663a78e223ace5b",

  PROVINCE: "安徽",
  CITY: "亳州",

  // 功能开关,打开：true，关闭：false
  SWITCH: {
    /** 每日天气 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    weather: true,

    /** 节假日 */
    // 下一休息日综合提醒, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    holidaytts: true,

    /** 每日N句 */
    // 金山每日一句, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    CIBA: true,

    // 每日一言, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    oneTalk: false,

    // 土味情话(彩虹屁), 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    earthyLoveWords: true,

    // 朋友圈文案, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    momentCopyrighting: false,

    // 毒鸡汤, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    poisonChickenSoup: false,

    // 古诗古文, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    poetry: false,

    /** 星座运势 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    horoscope: false,

    /** 生日消息和节日消息 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    birthdayMessage: true,

    /** 学生课表 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    courseSchedule: false,
  },

  /** 是否给文字设置多彩颜色, 和emoji不兼容 */
  // 如果您使用了微信测试号的模板中含有emoji表情，请填 false
  IS_SHOW_COLOR: false,

  /** 每日一言 */
  // 每日一言的内容类型
  // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
  LITERARY_PREFERENCE: "",

  USERS: [
    {
      // 想要发送的人的名字
      name: "小李",
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "oV_L55-qVPdAOZDykHoeKalnuim0",
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: "GsuxrAOC50FfD1FRHKxC45zRf4VczaNVfnbLhEaIpsA",
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: "03-31",
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: "*生日",
          name: "小李",
          year: "1998",
          date: "03-04",
        },
        {
          type: "节日",
          name: "相识纪念日",
          year: "2023",
          date: "01-18",
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: "love_day", date: "2023-01-18" },
        // 异地的日子
        { keyword: "longDistance_day", date: "2023-02-02" },
      ],
    },
    {
      // 想要发送的人的名字
      name: "自己",
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "oV_L55yinPIRUkVOZzUnrmuvUVVQ",
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: "GsuxrAOC50FfD1FRHKxC45zRf4VczaNVfnbLhEaIpsA",
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: "03-31",
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: "*生日",
          name: "小李",
          year: "1998",
          date: "03-04",
        },
        {
          type: "节日",
          name: "相识纪念日",
          year: "2023",
          date: "01-18",
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: "love_day", date: "2023-01-18" },
        // 异地的日子
        { keyword: "longDistance_day", date: "2023-02-02" },
      ],
    },
  ],

  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: "sBG-74pmb9PF6C2t34hduqW8FY7nvtoOMOIZd_C0g40",

  CALLBACK_USERS: [
    {
      name: "自己",
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "oV_L55yinPIRUkVOZzUnrmuvUVVQ",
    },
  ],

  /** 插槽 */

  /** 你可以在这里写超多的你想显示的内容了！
   * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
   * 比如：keyword: "lover_prattle" ，在测试号中就是 {{ lover_prattle.DATA }}
   * */
  SLOT_LIST: [
    // 这样配置的话，就会每次发送这句话
    {
      keyword: "encourage_oneself",
      contents: "你主要的问题在于读书太少而想得太多",
    },
    // 这样配置的话，就会每次随机选一句话发送
    {
      keyword: "lover_prattle",
      contents: [
        "今天也超级想小李的哦",
        "我可以抗煤气、扛大米，就是扛不住想你",
        "今天也很想你哦",
        "我爱小李",
        "我想小李",
        "我想抱抱小李",
        "我想亲亲小李",
        "贴贴～",
        "么么～",
        "今天巨巨巨想你",
        "好想老婆啊",
        "好想你啊臭宝",
        "亲晕你",
        "满脑子都是你",
        "啵唧～",
      ],
    },
    // 你可以不断按格式往下增加
    // ...
  ],
};

module.exports = USER_CONFIG;

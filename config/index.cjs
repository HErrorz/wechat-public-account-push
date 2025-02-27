/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
  // 使用微信测试号：公众号APP_ID
  APP_ID: "wx3298f54de84448c4",

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: "5f9d6e84d1c54e26f93983720338585c",

  PROVINCE: "河南",
  CITY: "郑州",

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
    courseSchedule: true,
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
      name: "娜娜",
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "oaExU7FWF-2n5I2uUJ3TcvInzwGs",
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: "ksw00PhrAidq5dCcj5mn9lv8CnWpzSl44fsZW1WBiVE",
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: "03-08",
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: "*生日",
          name: "娜娜",
          year: "1997",
          date: "01-29",
        },
        {
          type: "节日",
          name: "相识纪念日",
          year: "2025",
          date: "01-30",
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: "love_day", date: "2025-02-02" },
        // 异地的日子
        { keyword: "longDistance_day", date: "2025-02-04" },
      ],
    },
    {
      // 想要发送的人的名字
      name: "自己",
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "oaExU7MZFaszWucAQZ1-_NZwz6qA",
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: "ksw00PhrAidq5dCcj5mn9lv8CnWpzSl44fsZW1WBiVE",
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: "03-08",
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: "*生日",
          name: "娜娜",
          year: "1997",
          date: "01-29",
        },
        {
          type: "节日",
          name: "相识纪念日",
          year: "2025",
          date: "01-30",
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: "love_day", date: "2025-02-02" },
        // 异地的日子
        { keyword: "longDistance_day", date: "2025-02-04" },
      ],
    },
  ],

  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: "dwujCq81MxmbrHXB7dFtbwC4E3v90aZ8ZBsyYTuuK68",

  CALLBACK_USERS: [
    {
      name: "自己",
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "oaExU7MZFaszWucAQZ1-_NZwz6qA",
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
        "今天也超级想娜宝的哦",
        "我可以抗煤气、扛大米，就是扛不住想你",
        "今天也很想你哦",
        "我爱娜娜",
        "我想娜娜",
        "我想抱抱娜宝",
        "我想亲亲娜宝",
        "贴贴～",
        "么么～",
        "今天巨巨巨想你",
        "好想老婆啊",
        "好想你啊娜宝",
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

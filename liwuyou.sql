/*
Navicat MySQL Data Transfer

Source Server         : zym1808
Source Server Version : 50508
Source Host           : localhost:3306
Source Database       : liwuyou

Target Server Type    : MYSQL
Target Server Version : 50508
File Encoding         : 65001

Date: 2018-12-14 11:09:51
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `index_data`
-- ----------------------------
DROP TABLE IF EXISTS `index_data`;
CREATE TABLE `index_data` (
  `sid` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(100) NOT NULL,
  `title` varchar(50) NOT NULL,
  `price` float(7,2) NOT NULL,
  `urls` varchar(999) NOT NULL,
  `detail_title` varchar(100) NOT NULL,
  `detail_content` varchar(999) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of index_data
-- ----------------------------
INSERT INTO `index_data` VALUES ('1', 'http://liwuyou.b0.upaiyun.com/images/upload/Image/%E8%BD%A6%E8%BD%BD%E5%87%80%E5%8C%96%E5%99%A8.jpg', '车载净化器 ', '238.00', 'http://img2.liwuyou.com/images/201411/source_img/3515_P_1415932792231.jpg!pro500.jpg,http://img3.liwuyou.com/images/201709/source_img/3515_P_1506765752387.jpg!pro500.jpg,http://img5.liwuyou.com/images/201709/source_img/3515_P_1506765748404.jpg!pro500.jpg,http://img1.liwuyou.com/images/201709/source_img/3515_P_1506765745085.jpg!pro500.jpg,http://img4.liwuyou.com/images/201709/source_img/3515_P_1506765741898.jpg!pro500.jpg,http://img5.liwuyou.com/images/201709/source_img/3515_P_1506765735039.jpg!pro500.jpg', '车载净化小卫士', '拥有灵动跑车的曲线机身，优美性感的尾部设计，清洁太阳能省电节能，智能操作模式随心换，双核负离子发生器，强效活性炭甲醛过滤层。');
INSERT INTO `index_data` VALUES ('2', 'http://liwuyou.b0.upaiyun.com/images/upload/Image/%E7%8C%B4%E5%AD%90(5310).jpg', '猴爱你', '148.00', 'http://img3.liwuyou.com/images/201803/source_img/3743_P_1521190457432.jpg!pro500.jpg,http://img3.liwuyou.com/images/201705/source_img/3743_P_1493802432567.jpg!pro500.jpg,http://img1.liwuyou.com/images/201705/source_img/3743_P_1493802430085.jpg!pro500.jpg,http://img1.liwuyou.com/images/201705/source_img/3743_P_1493802432405.jpg!pro500.jpg,http://img3.liwuyou.com/images/201705/source_img/3743_P_1493802438087.jpg!pro500.jpg,http://img5.liwuyou.com/images/201803/source_img/3743_P_1521190459299.jpg!pro500.jpg', '猴爱你', '萨诺猴音乐枕，是一款吉祥音乐枕。它戴着耳机，神情放松地聆听音乐，造型非常时尚。萨诺猴音乐枕配有高品质扬声器，面料摸起来柔软舒服。抱着它，感受它的柔软、聆听音乐的畅快吧！');
INSERT INTO `index_data` VALUES ('3', 'http://liwuyou.b0.upaiyun.com/images/upload/Image/2(9890).jpg', '美好的你', '189.00', 'http://img2.liwuyou.com/images/201609/source_img/3746_P_1474516852086.jpg!pro500.jpg,http://img3.liwuyou.com/images/201608/source_img/3746_P_1472607375217.jpg!pro500.jpg,http://img2.liwuyou.com/images/201609/source_img/3746_P_1474516659681.jpg!pro500.jpg,http://img5.liwuyou.com/images/201611/source_img/3746_P_1479870602114.jpg!pro500.jpg,http://img2.liwuyou.com/images/201608/source_img/3746_P_1472607376471.jpg!pro500.jpg,http://img2.liwuyou.com/images/201607/source_img/3746_P_1468390264911.jpg!pro500.jpg', '美好的你', '告别光线陷阱，呈现您美好妆容，美好的你，适合这盏时尚低奢简约的化妆镜收纳台灯。 模拟自然光，你本来就很美；贴心小收纳，告别零乱；简约生活，尽在细节。');
INSERT INTO `index_data` VALUES ('4', 'http://liwuyou.b0.upaiyun.com/images/upload/Image/%E5%8A%A0%E6%B9%BF%E5%99%A8(1146).jpg', '生命能量', '198.00', 'http://img3.liwuyou.com/images/201608/source_img/3475_P_1472611704602.jpg!pro500.jpg,http://img5.liwuyou.com/images/201409/source_img/3475_P_1410830334789.jpg!pro500.jpg,http://img5.liwuyou.com/images/201409/source_img/3475_P_1410830335579.jpg!pro500.jpg,http://img2.liwuyou.com/images/201409/source_img/3475_P_1410830334436.jpg!pro500.jpg,http://img3.liwuyou.com/images/201409/source_img/3475_P_1410830336522.jpg!pro500.jpg,http://img4.liwuyou.com/images/201409/source_img/3475_P_1410830337818.jpg!pro500.jpg', '生命能量', '生命的能量从清晨开始，上班啦上课啦，轻轻开启开关，身边的空气转动起来，负离子不断传送给我们健康气息！办公室可以用上，在汽车上也可以用上，在家里睡觉时候更可以用上咯，健康的生活状态走起！而且还有4500毫安的移动电源功能哦，还有比这更方便的麽？赶紧拿一个回家吧');
INSERT INTO `index_data` VALUES ('5', 'http://liwuyou.b0.upaiyun.com/images/upload/Image/9(8908).jpg', '今生相依', '169.00', 'http://img3.liwuyou.com/images/201609/source_img/3738_P_1473151141702.jpg!pro500.jpg,http://img5.liwuyou.com/images/201611/source_img/3738_P_1479779220799.jpg!pro500.jpg,http://img4.liwuyou.com/images/201611/source_img/3738_P_1479779343208.jpg!pro500.jpg,http://img3.liwuyou.com/images/201603/source_img/3738_P_1458614000742.jpg!pro500.jpg,http://img4.liwuyou.com/images/201603/source_img/3738_P_1458614000343.jpg!pro500.jpg,http://img3.liwuyou.com/images/201603/source_img/3738_P_1458614001357.jpg!pro500.jpg', '今生相依', '自从有了你，我的思念之花就那么盛开了。牵挂的感觉袭遍我的全身，你不会知道我一个人是多么疯狂的想你，今生只与你相恋相依偎！');
INSERT INTO `index_data` VALUES ('6', 'http://liwuyou.b0.upaiyun.com/images/upload/Image/%E6%9F%A0%E6%AA%AC%E8%A1%A5%E6%B0%B4%E4%BB%AA.jpg', '檬檬的心情', '49.00', 'http://img2.liwuyou.com/images/201705/source_img/3821_P_1493880531516.JPG!pro500.jpg,http://img3.liwuyou.com/images/201705/source_img/3821_P_1493880542417.JPG!pro500.jpg,http://img1.liwuyou.com/images/201705/source_img/3821_P_1493880529370.JPG!pro500.jpg,http://img5.liwuyou.com/images/201705/source_img/3821_P_1493880530214.JPG!pro500.jpg,http://img1.liwuyou.com/images/201705/source_img/3821_P_1493880531635.JPG!pro500.jpg,http://img3.liwuyou.com/images/201705/source_img/3821_P_1493880532692.JPG!pro500.jpg', '檬檬的心情', '想要清凉的夏季，就要檬檬的心情，这是个柠檬的加湿器，隔着屏幕都似乎闻到了柠檬酸酸的香气~~只要一颗柠檬，就能发现生活有多美！');
INSERT INTO `index_data` VALUES ('7', 'http://liwuyou.b0.upaiyun.com/images/upload/Image/6(5456).jpg', '为你闪亮', '48.00', 'http://img2.liwuyou.com/images/201505/source_img/3633_P_1430907405031.jpg!pro500.jpg,http://img4.liwuyou.com/images/201505/source_img/3633_P_1430907406498.jpg!pro500.jpg,http://img2.liwuyou.com/images/201505/source_img/3633_P_1430907401491.jpg!pro500.jpg,http://img4.liwuyou.com/images/201505/source_img/3633_P_1430907407958.jpg!pro500.jpg,http://img5.liwuyou.com/images/201505/source_img/3633_P_1430907407949.jpg!pro500.jpg,http://img3.liwuyou.com/images/201505/source_img/3633_P_1430907399437.jpg!pro500.jpg', '为你闪亮', '为你闪亮小鸟随手灯时尚美观，创意实用。可充电调光，电池使用持久且环保节能。触碰设计方便使用。光线柔和不刺眼，常伴您进入梦乡。 更有个性定制内容，打造专属你的时尚哦！');
INSERT INTO `index_data` VALUES ('8', 'http://liwuyou.b0.upaiyun.com/images/upload/Image/7(5234).jpg', '爱心感温杯', '108.00', 'http://img1.liwuyou.com/images/201606/source_img/2945_P_1464769941180.JPG!pro500.jpg,http://img5.liwuyou.com/images/201609/source_img/2945_P_1475139834349.jpg!pro500.jpg,http://img5.liwuyou.com/images/201606/source_img/2945_P_1464769938524.JPG!pro500.jpg,http://img2.liwuyou.com/images/201608/source_img/2945_P_1472617109291.jpg!pro500.jpg,http://img1.liwuyou.com/images/201606/source_img/2945_P_1464769944390.JPG!pro500.jpg,http://img5.liwuyou.com/images/201606/source_img/2945_P_1464769950209.JPG!pro500.jpg', '爱心感温杯', 'Heart Tea。当你拿起茶杯，杯身上的略微凸出的心形就会闪烁迷人的颜色！蓝色，表示水温为0～35度；橘色，表示水温为35～75度；红色则表示温度在75~90度以上，提醒你慢慢喝，不然会烫口！');
INSERT INTO `index_data` VALUES ('9', 'http://liwuyou.b0.upaiyun.com/images/upload/Image/birthday01.jpg', '酷玩音乐台灯', '79.00', 'http://img1.liwuyou.com/images/201611/source_img/2729_P_1479887651700.jpg!pro500.jpg,http://img4.liwuyou.com/images/201611/source_img/2729_P_1479887666288.jpg!pro500.jpg,http://img5.liwuyou.com/images/201608/source_img/2729_P_1472623253789.jpg!pro500.jpg,http://img4.liwuyou.com/images/201608/source_img/2729_P_1472623253008.jpg!pro500.jpg,http://img1.liwuyou.com/images/201608/source_img/2729_P_1472623252980.jpg!pro500.jpg,http://img4.liwuyou.com/images/201606/source_img/2729_P_1465278515193.jpg!pro500.jpg', '酷玩音乐台灯', '可充电USB节能灯，触摸台灯音箱。新颖的外形及吊灯的设计，使得整个产品不管是家居还是办公，都会增添不少亮色气氛。全封闭灯罩及灯体设计，防尘，易清洁； 迷你音响，使得整个优雅环境增添音乐氛围~~在每个黑黑的夜晚里，TA都愿意陪伴着你，为你点亮一盏不灭的灯，为你献上一曲动听的音乐，伴你进入甜美的梦乡。');
INSERT INTO `index_data` VALUES ('10', 'http://liwuyou.b0.upaiyun.com/images/upload/Image/9.jpg', '爱的旋律', '88.00', 'http://img5.liwuyou.com/images/201609/source_img/436_P_1473070850374.jpg!pro500.jpg,http://img1.liwuyou.com/images/201609/source_img/436_P_1475207321125.jpg!pro500.jpg,http://img4.liwuyou.com/images/201601/source_img/436_P_1453364158313.jpg!pro500.jpg,http://img5.liwuyou.com/images/201406/source_img/436_P_1403136155459.JPG!pro500.jpg,http://img4.liwuyou.com/images/201406/source_img/436_P_1403136135188.jpg!pro500.jpg,http://img1.liwuyou.com/images/201406/source_img/436_P_1403136177230.JPG!pro500.jpg,http://img1.liwuyou.com/images/201406/source_img/436_P_1403136177230.JPG!pro70.jpg', '爱的旋律', '设计巧妙，每个零部件都经过精细车工制作。白色钢琴音乐盒清新淡雅，诗情画意。暗藏首饰格，在绒布台里面放上戒指，给TA一份意想不到的惊喜');
INSERT INTO `index_data` VALUES ('11', 'http://liwuyou.b0.upaiyun.com/images/upload/Image/2.jpg', '花儿朵朵开', '138.00', 'http://img2.liwuyou.com/images/201609/source_img/3367_P_1473748689466.jpg!pro500.jpg,http://img2.liwuyou.com/images/201406/source_img/3367_P_1401825399211.jpg!pro500.jpg,http://img5.liwuyou.com/images/201406/source_img/3367_P_1401825396099.jpg!pro500.jpg,http://img4.liwuyou.com/images/201406/source_img/3367_P_1401825390948.jpg!pro500.jpg,http://img5.liwuyou.com/images/201406/source_img/3367_P_1401825397744.jpg!pro500.jpg,http://img3.liwuyou.com/images/201406/source_img/3367_P_1401825400982.jpg!pro500.jpg', '花儿朵朵开', '转呀转，就真的遇见Mr.right ~花朵的旋转木马音乐盒，打开还有闪闪渐变的LED灯光~让黑夜瞬间从喧哗转成了宁静，在静谧的夜晚，与心爱的人一起漫步田间小道该是多么美好呢！');
INSERT INTO `index_data` VALUES ('12', 'http://liwuyou.b0.upaiyun.com/images/upload/Image/4.jpg', '温暖你星窝', '98.00', 'http://img1.liwuyou.com/images/201609/source_img/3770_P_1474939573730.JPG!pro500.jpg,http://img3.liwuyou.com/images/201609/source_img/3770_P_1474947537147.jpg!pro500.jpg,http://img3.liwuyou.com/images/201609/source_img/3770_P_1474947456247.jpg!pro500.jpg,http://img3.liwuyou.com/images/201609/source_img/3770_P_1474939573662.JPG!pro500.jpg,http://img4.liwuyou.com/images/201609/source_img/3770_P_1474939577043.jpg!pro500.jpg,http://img5.liwuyou.com/images/201609/source_img/3770_P_1474939573424.JPG!pro500.jpg', '温暖你星窝', '总是在你需要的时刻，给你温暖，总是在你需要能量的时候，为你充电，冬天，寒冷不再可怕');
INSERT INTO `index_data` VALUES ('13', 'http://liwuyou.b0.upaiyun.com/images/upload/Image/%E4%B8%83%E5%BD%A9%E5%B9%B8%E7%A6%8F.jpg', '七彩的幸福', '99.00', 'http://img3.liwuyou.com/images/201608/source_img/311_P_1470039707132.jpg!pro500.jpg,http://img2.liwuyou.com/images/201608/source_img/311_P_1471320690431.jpg!pro500.jpg,http://img4.liwuyou.com/images/201012/source_img/311_P_1393199881448.jpg!pro500.jpg,http://img2.liwuyou.com/images/201601/source_img/311_P_1453364973831.jpg!pro500.jpg,http://img4.liwuyou.com/images/201012/source_img/311_P_1354471776973.jpg!pro500.jpg,http://img1.liwuyou.com/images/201212/source_img/311_P_1354471780465.jpg!pro500.jpg', '七彩的幸福', '七彩幸福水晶玫瑰，真爱玫瑰的封存于水晶之中，代表对她的爱不褪色，呵护珍藏她在你心里。K9水晶，纯净剔透，；3D激光内雕工艺，自动旋转的渐变灯光座，映衬出玫瑰的梦幻唯美。');
INSERT INTO `index_data` VALUES ('14', 'http://liwuyou.b0.upaiyun.com/images/upload/Image/8.jpg', '男神风范', '199.00', 'http://img2.liwuyou.com/images/201611/source_img/3775_P_1479180243841.jpg!pro500.jpg,http://img1.liwuyou.com/images/201611/source_img/3775_P_1479799873895.jpg!pro500.jpg,http://img3.liwuyou.com/images/201611/source_img/3775_P_1479180237252.jpg!pro500.jpg,http://img3.liwuyou.com/images/201611/source_img/3775_P_1479180238962.jpg!pro500.jpg,http://img3.liwuyou.com/images/201611/source_img/3775_P_1479180238167.jpg!pro500.jpg,http://img4.liwuyou.com/images/201611/source_img/3775_P_1479180238238.jpg!pro500.jpg', '男神风范', '每一次不经意抬起的手腕，都是你在乎的时光流动，而我们在乎的，就是精准地向你展示每一秒钟，不论场合，不论哪一刻，一份好的礼物，一种男士的风范');
INSERT INTO `index_data` VALUES ('15', 'http://liwuyou.b0.upaiyun.com/images/upload/Image/5.jpg', '神烦狗', '98.00', 'http://img3.liwuyou.com/images/201704/source_img/3579_P_1491985186072.jpg!pro500.jpg,http://img1.liwuyou.com/images/201511/source_img/3579_P_1448446252575.jpg!pro500.jpg,http://img4.liwuyou.com/images/201502/source_img/3579_P_1423449559023.jpg!pro500.jpg,http://img5.liwuyou.com/images/201502/source_img/3579_P_1423449550529.jpg!pro500.jpg,http://img5.liwuyou.com/images/201502/source_img/3579_P_1423449559939.jpg!pro500.jpg,http://img1.liwuyou.com/images/201704/source_img/3579_P_1491985173550.jpg!pro500.jpg', '神烦狗', '高品质神烦狗doge狗头抱枕，个性3D仿真设计，让你觉得这就是活生生的一头狗啊！在光棍节愚人节拿出来估计会让很多小伙伴都惊呆了哦~它不仅仅是外形创意独特，也是超级实用的靠枕呢，上班时间，看电视坐沙发时候，抱着我们家的神烦狗狗，舒适感又增添不少呀！数码印刷效果，毛绒外套还可拆洗抱枕清洁和长久使用，您，值得拥有~');
INSERT INTO `index_data` VALUES ('16', 'http://liwuyou.b0.upaiyun.com/images/upload/Image/6.jpg', '生日烛光', '0.00', 'http://img3.liwuyou.com/images/201307/source_img/3087_P_1374108509027.jpg!pro500.jpg,http://img4.liwuyou.com/images/201307/source_img/3087_P_1373935670508.jpg!pro500.jpg,http://img2.liwuyou.com/images/201307/source_img/3087_P_1373935600841.jpg!pro500.jpg,http://img5.liwuyou.com/images/201307/source_img/3087_P_1373935666364.jpg!pro500.jpg,http://img1.liwuyou.com/images/201307/source_img/3087_P_1373935669315.jpg!pro500.jpg', '生日烛光-七彩发光抱枕', '简洁方形系列柔抱枕，选材柔软舒适，做工精致、品质优良，内衬太空记忆棉。作为抱枕，靠枕或使用，带给您一份动感及柔和的韵律，极具时尚气息。车用居家两相宜。为TA量身定制一个独一无二的抱枕吧，舒适实用的一份礼物~');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `sid` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `tel` varchar(11) NOT NULL,
  `password` varchar(40) NOT NULL,
  `date` datetime NOT NULL,
  `username` varchar(20) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '13312345678', 'e10adc3949ba59abbe56e057f20f883e', '2018-12-11 16:06:31', 'aaa');
INSERT INTO `user` VALUES ('2', '13312345679', 'e10adc3949ba59abbe56e057f20f883e', '2018-12-11 16:10:37', 'bbb');
INSERT INTO `user` VALUES ('3', '13312345677', 'e10adc3949ba59abbe56e057f20f883e', '2018-12-11 16:22:50', 'ccc');
INSERT INTO `user` VALUES ('4', '13312345676', 'e10adc3949ba59abbe56e057f20f883e', '2018-12-11 16:27:35', 'ddd');
INSERT INTO `user` VALUES ('5', '13312345675', 'e10adc3949ba59abbe56e057f20f883e', '2018-12-11 16:28:04', 'eee');
INSERT INTO `user` VALUES ('6', '13312345674', 'e10adc3949ba59abbe56e057f20f883e', '2018-12-11 21:04:37', 'fff');
INSERT INTO `user` VALUES ('9', '13312345671', 'e10adc3949ba59abbe56e057f20f883e', '2018-12-13 10:43:23', 'bhx');

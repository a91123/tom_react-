-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2020-11-17 15:23:55
-- 伺服器版本： 10.4.14-MariaDB
-- PHP 版本： 7.3.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `product-list`
--

-- --------------------------------------------------------

--
-- 資料表結構 `product`
--

CREATE TABLE `product` (
  `sid` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `Specialoffer` int(11) NOT NULL,
  `Added time` datetime NOT NULL DEFAULT current_timestamp(),
  `star` int(11) NOT NULL,
  `awesome` int(11) NOT NULL,
  `imgurl` text NOT NULL,
  `Selling` int(11) NOT NULL,
  `category` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `product`
--

INSERT INTO `product` (`sid`, `name`, `price`, `Specialoffer`, `Added time`, `star`, `awesome`, `imgurl`, `Selling`, `category`) VALUES
(1, '竹翠洗髮乳', 980, 980, '2020-10-28 22:55:05', 5, 5, 'http://localhost:3001/img/pr5.webp', 5, 2),
(5, '【選擇．揮別乾燥】秋冬保濕修護組', 980, 980, '2020-10-28 22:57:59', 4, 5, 'http://localhost:3001/img/pr8.jpg', 4, 2),
(7, '【選擇．揮別乾燥】秋冬保濕修護組', 980, 980, '2020-10-28 22:58:29', 4, 5, 'http://localhost:3001/img/pr9.jpg', 0, 3),
(8, '【選擇．迎接亮澤】好感緊緻明亮組', 980, 700, '2020-10-28 22:58:29', 5, 5, 'http://localhost:3001/img/pr1.jpg', 2, 2),
(9, '【選擇．少些毛躁】修護承諾柔順組', 980, 980, '2020-10-28 22:58:29', 3, 5, 'http://localhost:3001/img/pr6.webp', 3, 3),
(13, '【選擇．改善細紋】奇蹟亮眼潤澤組', 2880, 2880, '2020-10-28 22:58:29', 5, 5, 'http://localhost:3001/img/pr7.jpg', 0, 1),
(21, '輕乳液 (無乳化劑)', 980, 980, '2020-11-04 20:08:53', 5, 6, 'http://localhost:3001/img/pr8.jpg', 30, 2),
(22, 'SwissVita薇佳微晶3D全能洗顏霜100g', 400, 400, '2020-11-04 20:08:53', 4, 6, 'http://localhost:3001/img/top5.jpg', 30, 2),
(23, '純粹保濕精華液 30 ml', 1990, 1800, '2020-11-04 20:22:11', 4, 6, 'http://localhost:3001/img/pr11.jpg', 30, 2),
(25, '奇蹟辣木油250ml', 820, 820, '2020-11-04 20:26:11', 5, 10, 'http://localhost:3001/img/hot00.jpg', 35, 2),
(31, '閃亮氣色唇蜜組', 1280, 1280, '2020-11-17 21:59:28', 5, 0, 'http://localhost:3001/img/new7.jpg', 0, 4),
(32, '滋潤氣色唇蜜組', 380, 380, '2020-11-17 22:03:40', 0, 0, 'http://localhost:3001/img/lip3.jpg', 0, 4);

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`sid`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product`
--
ALTER TABLE `product`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

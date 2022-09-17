-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jun 19, 2022 at 01:55 PM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `shop_moh`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `brand` varchar(100) NOT NULL,
  `color` varchar(100) NOT NULL,
  `size` varchar(250) NOT NULL,
  `material` varchar(100) NOT NULL,
  `price` int(11) unsigned NOT NULL,
  `cat` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `brand`, `color`, `size`, `material`, `price`, `cat`) VALUES
(1, 'پیراهن سفید فریولی', 'فریولی(feriolli)', 'سفید', '-L--M--S-', 'نخی', 671500, 'پیراهن مردانه'),
(2, 'پیراهن سفید ماسیمو دوتی', 'ماسیمو دوتی(massimi dutti)', 'سفید', '-XL--XXL--M-', 'نخی', 534000, 'پیراهن مردانه'),
(3, 'پیراهن مشکی فرد', 'فرد(fred)', 'مشکی', '-XL--XXL--L--M-', 'پلی استر', 398000, 'پیراهن مردانه'),
(4, 'پیراهن مشکی فریولی', 'فریولی(feriolli)', 'مشکی', '-XL--XXL--M--L-', 'نخی', 671500, 'پیراهن مردانه'),
(5, 'پیراهن مشکی فریولی', 'فریولی(feriolli)', 'مشکی', '-XL--XXL--M-', 'نخی', 416500, 'پیراهن مردانه');

-- --------------------------------------------------------
--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `fname` varchar(60) NOT NULL,
  `lname` varchar(70) NOT NULL,
  `email` varchar(70) NOT NULL,
  `pass` varchar(100) NOT NULL,
  `mob` varchar(11) NOT NULL,
  `address` varchar(150) NOT NULL,
  `credit` int(11) NOT NULL,
  `state` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

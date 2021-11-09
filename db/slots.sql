-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 09, 2021 at 11:05 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `counselling`
--

-- --------------------------------------------------------

--
-- Table structure for table `slots`
--

CREATE TABLE `slots` (
  `slot_ID` int(11) NOT NULL,
  `slot` varchar(256) NOT NULL,
  `is_booked` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `slots`
--

INSERT INTO `slots` (`slot_ID`, `slot`, `is_booked`) VALUES
(1, '9 AM - 10 AM', 'Available'),
(2, '1 PM - 2 PM', 'Available'),
(3, '6 PM - 7 PM', 'Available'),
(4, '8 AM - 9 AM', 'Available'),
(5, '3 PM - 4 PM', 'Available'),
(6, '8 PM - 9 PM', 'Available'),
(7, '10 AM - 11 AM', 'Available'),
(8, '3 PM - 4 PM', 'Available'),
(9, '9 PM - 10 PM', 'Available'),
(10, '9 AM - 10 AM', 'Available'),
(11, '4 PM - 5 PM', 'Available'),
(12, '7 PM - 8 PM', 'Available'),
(13, '8 AM - 9 AM', 'Available'),
(14, '1 PM - 2 PM', 'Available'),
(15, '8 PM - 9 PM', 'Available');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `slots`
--
ALTER TABLE `slots`
  ADD PRIMARY KEY (`slot_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `slots`
--
ALTER TABLE `slots`
  MODIFY `slot_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

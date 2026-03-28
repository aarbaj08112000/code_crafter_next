-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 28, 2026 at 10:37 AM
-- Server version: 8.0.45-0ubuntu0.22.04.1
-- PHP Version: 8.1.2-1ubuntu2.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `code_crafter`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact_master`
--

CREATE TABLE `contact_master` (
  `id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `contact_reason` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `message` longtext COLLATE utf8mb4_general_ci NOT NULL,
  `email_sent` enum('Yes','No') COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'Yes',
  `created_by` int DEFAULT NULL,
  `created_on` datetime DEFAULT NULL,
  `updated_by` int DEFAULT NULL,
  `updated_on` datetime DEFAULT NULL,
  `status` enum('Active','Inactive') COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'Active'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact_master`
--

INSERT INTO `contact_master` (`id`, `name`, `email`, `phone`, `contact_reason`, `message`, `email_sent`, `created_by`, `created_on`, `updated_by`, `updated_on`, `status`) VALUES
(1, 'Gayu', 'gayatriheda@yopmail.com', '8956745120', 'Query', 'query', 'Yes', 1, '2024-06-18 11:08:45', NULL, NULL, 'Active'),
(2, 'sss', 'gayu@gmail.com', '8381058482', 'query', 'wer', 'Yes', 1, '2024-06-18 11:15:35', NULL, NULL, 'Active'),
(3, 'Narayan', 'demo@arom.com', '8381058482', 'query', 'wetk', 'Yes', 1, '2024-06-18 11:20:03', NULL, NULL, 'Active'),
(4, 'Narayan', 'john@gmail.com', '8381058482', 'query', 'wertyuio', 'Yes', 1, '2024-06-18 11:23:15', NULL, NULL, 'Active'),
(5, 'Gayatri Narayan Hedau', 'gayatrihedau@yopmail.com', '8381058482', 'query', 'query', 'Yes', 1, '2024-06-20 06:42:48', NULL, NULL, 'Active'),
(6, 'Soni Mishra', 'sonimishramkt@gmail.com', '2102102101', '2102102101', 'Hi,\r\n\r\nI am trying to get in touch regarding your website. Do you want to build a professional website or re-do your existing one cost-effectively?\r\n\r\nWe build attractive websites that convert visitors into customers.\r\n\r\nPlease let me know if you are interested, I will send through some price indicative and my work.\r\n\r\nYours Sincerely\r\nSoni Mishra', 'Yes', 1, '2024-06-29 11:22:24', NULL, NULL, 'Active'),
(7, 'Gary Charles', 'garycharles@dominatingkeywords.com', '8185327032', 'ad', 'Get thousands of clicks per month from Google, Bing and other search engines from as low as $299 per month.\r\nNo SEO and no PPC.\r\nFlat fee per keyword.\r\nSend list of desired keywords and I\'ll send you traffic quote and details within 24 hours.\r\nYou can also visit our website and see online demonstration.', 'Yes', 1, '2024-09-20 06:53:24', NULL, NULL, 'Active'),
(8, 'Gary Charles', 'garycharles@dominatingkeywords.com', '8185327032', 'ad', 'Get thousands of clicks per month from Google, Bing and other search engines from as low as $299 per month.\r\nNo SEO and no PPC.\r\nFlat fee per keyword.\r\nSend list of desired keywords and I\'ll send you traffic quote and details within 24 hours.\r\nYou can also visit our website and see online demonstration.', 'Yes', 1, '2024-09-20 06:53:47', NULL, NULL, 'Active'),
(9, 'Gary Charles', 'gary_charles@dominatingkeywords.com', '8054002077', 'keywords', 'I am not offering you SEO, nor PPC.\r\nIt\'s something completely different.\r\nJust send me keywords of your interest or fill online quote form on our website and I\'ll give you traffic guarantees on each of them.\r\nLet me demonstrate how it works and you will be surprised by the results. ', 'Yes', 1, '2025-03-03 17:55:43', NULL, NULL, 'Active'),
(10, 'Gary Charles', 'gary-charles@dominatingkeywords.com', '8054002077', 'keywords', 'Let me demonstrate to you how you can get guaranteed thousands of clicks to your website without SEO and without Pay Per Click.\r\nYou will start getting keyword targeted traffic in less than 48 hours.\r\nJust send us your keywords and we\'ll tell you how much monthly clicks we can guarantee without paying for each click and waiting for SEO results.\r\nYou will get exclusive ownership of keywords you choose for flat fee (no Pay Per Click)...', 'Yes', 1, '2025-04-23 15:00:21', NULL, NULL, 'Active'),
(11, 'Gary Charles', 'gary.charles@dominatingkeywords.com', '8054002077', 'keywords', 'Let me demonstrate to you how you can get guaranteed thousands of clicks to your website without SEO and without Pay Per Click.\r\nYou will start getting keyword targeted traffic in less than 48 hours.\r\nJust send us your keywords and we\'ll tell you how much monthly clicks we can guarantee without paying for each click and waiting for SEO results.\r\nYou will get exclusive ownership of keywords you choose for flat fee (no Pay Per Click)...', 'Yes', 1, '2025-05-21 02:04:43', NULL, NULL, 'Active'),
(12, 'Sean Hicks', 'seanhicks@dominate-keywords.com', '8054002077', 'keywords', 'What if you could get more keyword targeted traffic to your website from Google without paying for each click and PPC bidding competition?\r\nWith our keyword targeted banner technology you can achieve top position in search engine results in less than 24 hours and get guaranteed monthly visitors to your website.\r\nYou will save months of waiting for SEO and thousands of dollars on PPC Bidding competition.\r\nIf you are interested, just let me know. Also, send me list of your keywords and I\'ll send you minimum traffic guarantee on each of them.', 'Yes', 1, '2025-06-17 07:34:15', NULL, NULL, 'Active'),
(13, 'Jamir Shaikh', 'jamir6190@gmail.com', '9764674164', 'job ', 'Any job opning for freshar', 'Yes', 1, '2025-08-12 07:53:51', NULL, NULL, 'Active'),
(14, 'Argade Dnyaneshwar Ambadas', 'dnyaneshwarargade8@gmail.com', '9322452869', 'Job Releted', 'I am frontend Devloper', 'Yes', 1, '2025-08-12 08:12:54', NULL, NULL, 'Active'),
(15, 'Ganesh Joshi', 'ganeshjoshi2903@gmail.com', '9359362054', 'Looking for an internship so any openings', 'I am currently looking for an internship ', 'Yes', 1, '2025-08-15 08:51:16', NULL, NULL, 'Active'),
(16, 'Gayu', 'gayatrihedau3@gmail.com', '8381058482', 'Hi', 'Testing', 'Yes', 1, '2025-09-19 15:28:16', NULL, NULL, 'Active'),
(17, 'Sonali Yogesh Sahane', 'sonaligore29@gmail.com', '8379939288', 'New apportunities ', 'Looking for new apportunity and carry a good communication with clinets and have abilty to perform my daily targets.', 'Yes', 1, '2025-11-07 06:54:40', NULL, NULL, 'Active'),
(18, 'Suvarna nivrutti bobade', 'suvarnabobade1611@gmail.com', '9511839418', 'Inquiry Regarding Java Full Stack Job Vacancy', 'Hello Sir/Madam,\r\nI have completed Full Stack Java Development and have 3 months of hands-on experience as a Java Intern. I am seeking a Java Full Stack Developer position—kindly inform me if there are any openings.\r\nThank you.', 'Yes', 1, '2026-01-06 04:52:08', NULL, NULL, 'Active'),
(19, 'Om Bairagi ', 'ombairagi02@gmail.com', '9146064310', 'Job vaccancy ', 'I am fresher for job', 'Yes', 1, '2026-01-15 14:47:35', NULL, NULL, 'Active'),
(20, 'Gayatri Narayan Hedau', 'gayatri.arom@gmail.com', '9874563210', 'Web Development', 'Testing data', 'Yes', 1, '2026-02-28 11:01:02', NULL, NULL, 'Active'),
(21, 'GAYATRI HEDAU', 'gayatrihedau3@gmail.com', '9874563210', 'Web Development', 'Testing data', 'Yes', 1, '2026-02-28 11:02:26', NULL, NULL, 'Active'),
(22, 'GAYATRI HEDAU', 'gayatrihedau3@gmail.com', '8381058482', 'Web Development', 'I visited your website and I am interested in your services.\r\nPlease share more details regarding pricing, timeline, and process.', 'Yes', 1, '2026-03-02 08:28:19', NULL, NULL, 'Active'),
(23, 'Aarbaj Mulla', 'mullaaarbaj10@gmail.com', '8485835691', 'Web Development', 'Test', 'Yes', 1, '2026-03-03 08:18:16', NULL, NULL, 'Active');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact_master`
--
ALTER TABLE `contact_master`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact_master`
--
ALTER TABLE `contact_master`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

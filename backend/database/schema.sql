use resort;

DROP TABLE IF EXISTS `Phone Number`;
DROP TABLE IF EXISTS `Review`;
DROP TABLE IF EXISTS `Request`;
DROP TABLE IF EXISTS `Booking`;
DROP TABLE IF EXISTS `Room`;
DROP TABLE IF EXISTS `Cottage`;
DROP TABLE IF EXISTS `Customer`;

CREATE TABLE `Customer` (
  `CustomerID` INT AUTO_INCREMENT,
  `Email` varchar(255),
  `first_name` varchar(255),
  `last_name` varchar(255),
  `NIC` varchar(20),
  PRIMARY KEY (`CustomerID`)
);

CREATE TABLE `Phone Number` (
  `PhoneID` INT AUTO_INCREMENT,
  `CustomerID` INT,
  `Phone number` varchar(12),
  PRIMARY KEY (`PhoneID`)
);

CREATE TABLE `Cottage` (
  `CottageID` INT,
  `AC` BOOLEAN,
  `Max members` INT,
  `Price` DOUBLE,
  `Description('/' separated)` TEXT,
  PRIMARY KEY (`CottageID`)
);

CREATE TABLE `Room` (
  `RoomID` INT,
  `Max members` INT,
  `Price` DOUBLE,
  `Description('/' separated)` TEXT,
  PRIMARY KEY (`RoomID`)
);

CREATE TABLE `Booking` (
  `Booking_Ref` INT AUTO_INCREMENT,
  `CottageID` INT,
  `RoomID` INT,
  `AC` boolean,
  `from` date,
  `to` date,
  PRIMARY KEY (`Booking_Ref`),
  FOREIGN KEY (`CottageID`) REFERENCES `Cottage`(`CottageID`),
  FOREIGN KEY (`RoomID`) REFERENCES `Room`(`RoomID`)
);

CREATE TABLE `Request` (
  `Request_Ref` INT,
  `Booking_Ref` INT,
  `CustomerID` INT,
  `Confirmed` BOOLEAN,
  PRIMARY KEY (`Request_Ref`),
  FOREIGN KEY (`Booking_Ref`) REFERENCES `Booking`(`Booking_Ref`)
);

CREATE TABLE `Review` (
  `Review_Id` INT AUTO_INCREMENT,
  `Request_Ref` INT,
  `Rating` INT,
  `Content` TEXT,
  PRIMARY KEY (`Review_Id`)
);


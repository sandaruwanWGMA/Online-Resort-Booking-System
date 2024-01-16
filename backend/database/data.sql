-- Insert dummy data into Customer table
INSERT INTO `Customer` (`Email`, `first_name`, `last_name`, `NIC`) VALUES
('john.doe@example.com', 'John', 'Doe', '123456789A'),
('jane.smith@example.com', 'Jane', 'Smith', '987654321B'),
('bob.jones@example.com', 'Bob', 'Jones', '456789123C'),
('alice.white@example.com', 'Alice', 'White', '654321987D'),
('michael.green@example.com', 'Michael', 'Green', '321987654E');

-- Insert dummy data into Phone Number table
INSERT INTO `Phone Number` (`CustomerID`, `Phone number`) VALUES
(1, '123-456-7890'),
(2, '987-654-3210'),
(3, '456-789-1230'),
(4, '654-321-9870'),
(5, '321-987-6540');

-- Insert dummy data into Cottage table
INSERT INTO `Cottage` (`CottageID`, `AC`, `Max members`, `Price`, `Description('/' separated)`) VALUES
(1, true, 4, 150.00, 'Beautiful cottage/with scenic view'),
(2, false, 6, 120.00, 'Cozy cottage/near the lake'),
(3, true, 2, 80.00, 'Private cottage/amidst the woods');

-- Insert dummy data into Room table
INSERT INTO `Room` (`RoomID`, `Max members`, `Price`, `Description('/' separated)`) VALUES
(1, 2, 50.00, 'Standard room/queen bed'),
(2, 4, 80.00, 'Deluxe room/king bed'),
(3, 1, 30.00, 'Economy room/twin bed');

-- Insert dummy data into Booking table
INSERT INTO `Booking` (`CottageID`, `RoomID`, `AC`, `from`, `to`) VALUES
(1, 2, true, '2024-01-20', '2024-01-25'),
(2, 1, false, '2024-02-05', '2024-02-10'),
(3, 3, true, '2024-03-15', '2024-03-20');

-- Insert dummy data into Request table
INSERT INTO `Request` (`Booking_Ref`, `CustomerID`, `Confirmed`) VALUES
(1, 1, true),
(2, 2, true),
(3, 3, false);

-- Insert dummy data into Review table
INSERT INTO `Review` (`Request_Ref`, `Rating`, `Content`) VALUES
(1, 4, 'Great experience, loved the view!'),
(2, 3, 'Decent stay, could improve cleanliness'),
(3, 5, 'Absolutely wonderful, highly recommended');

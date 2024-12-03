-- Table for Enrollment Data
CREATE TABLE Enrollment (
    year INT PRIMARY KEY,
    undergrad_students INT,
    grad_students INT,
    international_students INT,
    female_percentage DECIMAL(5, 2),
    male_percentage DECIMAL(5, 2),
    white_percentage DECIMAL(5, 2),
    black_percentage DECIMAL(5, 2),
    hispanic_percentage DECIMAL(5, 2),
    asian_percentage DECIMAL(5, 2),
    other_percentage DECIMAL(5, 2)
);

-- Table for Rankings Data
CREATE TABLE Rankings (
    year INT PRIMARY KEY,
    overall_ranking INT,
    nursing_ranking INT
);

-- Table for Research Funding
CREATE TABLE Research (
    year INT PRIMARY KEY,
    funding_amount DECIMAL(10, 2)
);

-- Table for Sports Achievements
CREATE TABLE Sports (
    year INT PRIMARY KEY,
    football_achievement VARCHAR(255),
    stadium_capacity INT
);

-- Insert Sample Data
INSERT INTO Enrollment VALUES
(2020, 21500, 6000, 2500, 53, 47, 40, 29, 19, 8, 4),
(2021, 22000, 6300, 2800, 51, 49, 49, 22, 11, 11, 7),
(2022, 22800, 6700, 3100, 54, 46, 52, 24, 10, 7, 7),
(2023, 23400, 7100, 3500, 54, 46, 45, 30, 15, 7, 3);

INSERT INTO Rankings VALUES
(2020, 200, 90),
(2021, 180, 78),
(2022, 165, 67),
(2023, 152, 54);

INSERT INTO Research VALUES
(2020, 50.2),
(2021, 54.3),
(2022, 61.0),
(2023, 73.2);

INSERT INTO Sports VALUES
(2021, 'Reached Conference USA Playoffs', NULL),
(2022, 'Conference USA Champions', NULL),
(2023, 'NCAA Bowl Game Appearance', 15300),
(2025, NULL, 18170);

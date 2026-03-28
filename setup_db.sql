-- setup_db.sql
CREATE TABLE IF NOT EXISTS contact_master (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  contact_reason VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_by INT DEFAULT 1,
  created_on DATETIME DEFAULT CURRENT_TIMESTAMP
);

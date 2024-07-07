/* Resetting default margin and padding */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Global styles */
body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Navbar */
.navbar {
    background-color: #333;
    color: #fff;
    padding: 20px 0;
}

.navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo a {
    color: #fff;
    text-decoration: none;
    font-size: 24px;
    font-weight: bold;
}

.nav-links {
    list-style: none;
    display: flex;
}

.nav-links li {
    margin-right: 20px;
}

.nav-links a {
    color: #fff;
    text-decoration: none;
}

.search-bar {
    position: relative;
}

.search-bar input[type="text"] {
    padding: 8px 15px;
    border: none;
    border-radius: 20px;
}

.search-bar button {
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    color: #fff;
}

.account {
    position: relative;
}

.account .dropdown {
    position: absolute;
    top: 100%;
    right: 0;
    background-color: #333;
    padding: 10px;
    display: none;
}

.account .dropdown-content a {
    display: block;
    color: #fff;
    padding: 5px 0;
    text-decoration: none;
}

/* Hero Section */
.hero {
    background-color: #f4f4f4;
    padding: 40px 0;
    text-align: center;
}

.hero h1 {
    font-size: 36px;
    margin-bottom: 20px;
}

/* Instructor Grid */
.instructor-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 20px;
   
}

.instructor-card {
    border: 1px solid #ccc;
    padding: 20px;
    text-align: center;
}

.instructor-card img {
    width: 100%;
    border-radius: 50%;
    margin-bottom: 15px;
}

.instructor-content h3 {
    margin-bottom: 10px;
}

.social-icons a {
    margin-right: 10px;
}

/* Load More Button */
.load-more {
    display: block;
    margin: 20px auto;
    padding: 10px 20px;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

/* Become Section */
.become-section {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
}

.become-box {
    flex: 1;
    background-color: #f4f4f4;
    padding: 20px;
    text-align: center;
}

.become-box h2 {
    margin-bottom: 10px;
}

.become-btn {
    padding: 10px 20px;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

/* Footer */
footer {
    background-color: #333;
    color: #fff;
    padding: 40px 0;
}

.newsletter input[type="email"] {
    padding: 10px;
    border: none;
    border-radius: 20px;
}

.newsletter button {
    padding: 10px 20px;
    background-color: #fff;
    color: #333;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    margin-left: 10px;
}

.footer-columns {
    display: flex;
}

.column {
    flex: 1;
    padding: 0 20px;
}

.column h4 {
    margin-bottom: 10px;
}

.column ul {
    list-style: none;
    padding: 0;
}

.column ul li {
    margin-bottom: 5px;
}

.footer-bottom {
    margin-top: 20px;
    border-top: 1px solid #777;
    padding-top: 20px;
    text-align: center;
}
# Assignment

## To Test this locally:

### Step-1: Clone the GitHub repository
   Command: git clone repo-url


### Step-2: Install dependencies

Command: \
cd auth-assignment\
npm install 



### Step-3: Create .env file in your root folder(auth-assignment folder)

### setup your instance from atlas + compass :

MONGO_URI = "mongodb+srv://username:password@mongodb.net/" \
AUTH_SECRET = kdkbhjvahbdv09-sjdnb  ( any random )

### can also use :
MONGO_URI='mongodb://127.0.0.1:27017/test' \
AUTH_SECRET=klsgjcsr6ku987123kjdvlksadfadf0243 \

Then open this on mongodb compass

(This will only work if you have mongodb correctly installed )


### Step-4: Run your development server
Command: npm run dev


### Step-5: User Roles
- For user role:
  ```
  1. simply register
  2. Login
  3. Access to Dashboard Page
  ```
- For admin role:
  ```
  1. Register
  2. go to your cluster document of that User ( in mongodb compass )
  3. Change role from 'user' to 'admim'
  4. Logout and Login again using the same credentials
  4. Access to Admin Page!!
  ```



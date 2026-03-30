Iteration 1 - Standup 1
Date:
Time:
Attendees:

Planned tasks:
- Set up Node project
- Connect MongoDB Atlas
- Create Product schema
- Build CRUD + GetAll endpoints
- Build simple frontend
- Deploy app

Blockers:
- None yet / Atlas connection string / deployment question

Next standup:
- 1 hour later

Iteration 1 - Standup 2
Done:
- Built full-stack product CRUD app
- Connected MongoDB Atlas
- Confirmed browser app runs at http://localhost:3000
- Confirmed product data is stored in storeProductsDB.products
- Confirmed Create and GetAll work
- Confirmed Atlas shows 5 products

Doing:
- Finishing Get one, Update, Delete, and re-create checks
- Preparing deployment so teammates can access my module

Blockers:
- MongoDB Atlas DNS/SRV and authentication issues were resolved

Reflection:
The hardest part of this iteration was Atlas connection setup. Once the standard connection string and correct database user password were used, the application worked correctly. The duplicate key error also confirmed that productId uniqueness was being enforced correctly.

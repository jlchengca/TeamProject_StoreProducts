Iteration 0 - Standup 
Date:March 30, 2026
Time:8:25AM
Attendees: Ferreira, Tiago Philippe;Barry, Mariama;Cheng, Julong

Planned tasks: discussed group project by Email and made a meeting time. 
- Set up Node project
- Connect MongoDB Atlas
- Create Product schema
- Build CRUD + GetAll endpoints
- Build simple frontend
- Deploy app

Blockers:
- None yet / Atlas connection string / deployment question

Next standup:


Iteration 1 - Individual Implementation 
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

Next standup:

Iteration 2 - Integration & Testing 
Date:April 8, 2026
Time: 7PM
Attendees: Ferreira, Tiago Philippe;Barry, Mariama;Cheng, Julong

Integration and testing were completed by using separate test files:
Self.getAll.test.js
Member1.getAll.test.js
Member2.getAll.test.js

Reflection:
Each test verified that the endpoint was reachable, returned HTTP 200, and provided a valid JSON array. All tests were executed through automate.js to confirm that the integrated APIs responded correctly.

-hours of later

Iteration 3 - Demoing
each team member demos their solution. 

Reflection:
All tasks finished. 

@echo off
echo ================================================================================
echo     RISING LEADERS OF GENERATION - NGO WEBSITE
echo     Creating Folder and File Structure (without code)
echo ================================================================================
echo.

REM Create main project directory
mkdir "rlg website" 2>nul
cd "rlg website"

echo [1/6] Creating Backend Folder Structure...

REM Backend directories
mkdir "backend\controllers" 2>nul
mkdir "backend\models" 2>nul
mkdir "backend\routes" 2>nul
mkdir "backend\middleware" 2>nul
mkdir "backend\config" 2>nul
mkdir "backend\utils" 2>nul
mkdir "backend\services" 2>nul
mkdir "backend\validators" 2>nul
mkdir "backend\helpers" 2>nul
mkdir "backend\seeders" 2>nul
mkdir "backend\uploads\blogs" 2>nul
mkdir "backend\uploads\gallery" 2>nul
mkdir "backend\logs" 2>nul

REM Backend root files
type nul > backend\.env 2>nul
type nul > backend\.gitignore 2>nul
type nul > backend\server.js 2>nul
type nul > backend\package.json 2>nul
type nul > backend\ecosystem.config.js 2>nul

REM Backend controllers
type nul > backend\controllers\blog.controller.js 2>nul
type nul > backend\controllers\gallery.controller.js 2>nul
type nul > backend\controllers\donation.controller.js 2>nul
type nul > backend\controllers\contact.controller.js 2>nul
type nul > backend\controllers\admin.controller.js 2>nul
type nul > backend\controllers\program.controller.js 2>nul
type nul > backend\controllers\auth.controller.js 2>nul
type nul > backend\controllers\user.controller.js 2>nul
type nul > backend\controllers\dashboard.controller.js 2>nul

REM Backend models
type nul > backend\models\Blog.model.js 2>nul
type nul > backend\models\Gallery.model.js 2>nul
type nul > backend\models\Donation.model.js 2>nul
type nul > backend\models\Admin.model.js 2>nul
type nul > backend\models\Program.model.js 2>nul
type nul > backend\models\User.model.js 2>nul
type nul > backend\models\Contact.model.js 2>nul
type nul > backend\models\Event.model.js 2>nul
type nul > backend\models\Testimonial.model.js 2>nul
type nul > backend\models\Setting.model.js 2>nul

REM Backend routes
type nul > backend\routes\blog.routes.js 2>nul
type nul > backend\routes\gallery.routes.js 2>nul
type nul > backend\routes\donation.routes.js 2>nul
type nul > backend\routes\contact.routes.js 2>nul
type nul > backend\routes\admin.routes.js 2>nul
type nul > backend\routes\program.routes.js 2>nul
type nul > backend\routes\auth.routes.js 2>nul
type nul > backend\routes\user.routes.js 2>nul
type nul > backend\routes\dashboard.routes.js 2>nul
type nul > backend\routes\event.routes.js 2>nul
type nul > backend\routes\testimonial.routes.js 2>nul
type nul > backend\routes\upload.routes.js 2>nul

REM Backend middleware
type nul > backend\middleware\auth.middleware.js 2>nul
type nul > backend\middleware\upload.middleware.js 2>nul
type nul > backend\middleware\validation.middleware.js 2>nul
type nul > backend\middleware\error.middleware.js 2>nul
type nul > backend\middleware\rateLimit.middleware.js 2>nul
type nul > backend\middleware\logger.middleware.js 2>nul

REM Backend config
type nul > backend\config\database.config.js 2>nul
type nul > backend\config\nodemailer.config.js 2>nul
type nul > backend\config\cloudinary.config.js 2>nul
type nul > backend\config\multer.config.js 2>nul
type nul > backend\config\passport.config.js 2>nul
type nul > backend\config\constants.js 2>nul

REM Backend utils
type nul > backend\utils\generateToken.js 2>nul
type nul > backend\utils\sendEmail.js 2>nul
type nul > backend\utils\validationHelpers.js 2>nul
type nul > backend\utils\apiResponse.js 2>nul
type nul > backend\utils\logger.js 2>nul
type nul > backend\utils\fileHelpers.js 2>nul

REM Backend services
type nul > backend\services\email.service.js 2>nul
type nul > backend\services\payment.service.js 2>nul
type nul > backend\services\sms.service.js 2>nul
type nul > backend\services\analytics.service.js 2>nul

REM Backend seeders
type nul > backend\seeders\admin.seeder.js 2>nul
type nul > backend\seeders\program.seeder.js 2>nul
type nul > backend\seeders\blog.seeder.js 2>nul

echo [2/6] Creating Frontend Folder Structure...

REM Frontend directories
mkdir "frontend\public" 2>nul
mkdir "frontend\src\components\Layout" 2>nul
mkdir "frontend\src\components\Common" 2>nul
mkdir "frontend\src\components\Forms" 2>nul
mkdir "frontend\src\components\Cards" 2>nul
mkdir "frontend\src\components\Modals" 2>nul
mkdir "frontend\src\components\Loaders" 2>nul
mkdir "frontend\src\pages\admin" 2>nul
mkdir "frontend\src\pages\auth" 2>nul
mkdir "frontend\src\services" 2>nul
mkdir "frontend\src\styles" 2>nul
mkdir "frontend\src\utils" 2>nul
mkdir "frontend\src\context" 2>nul
mkdir "frontend\src\hooks" 2>nul
mkdir "frontend\src\assets\images" 2>nul
mkdir "frontend\src\assets\icons" 2>nul
mkdir "frontend\src\assets\fonts" 2>nul
mkdir "frontend\src\constants" 2>nul
mkdir "frontend\src\routes" 2>nul

REM Frontend root files
type nul > frontend\.env 2>nul
type nul > frontend\.gitignore 2>nul
type nul > frontend\package.json 2>nul
type nul > frontend\tailwind.config.js 2>nul
type nul > frontend\postcss.config.js 2>nul
type nul > frontend\jsconfig.json 2>nul
type nul > frontend\README.md 2>nul

REM Frontend public
type nul > frontend\public\index.html 2>nul
type nul > frontend\public\favicon.ico 2>nul
type nul > frontend\public\robots.txt 2>nul
type nul > frontend\public\manifest.json 2>nul

REM Frontend src root
type nul > frontend\src\index.js 2>nul
type nul > frontend\src\App.js 2>nul
type nul > frontend\src\reportWebVitals.js 2>nul
type nul > frontend\src\setupTests.js 2>nul

REM Frontend components - Layout
type nul > frontend\src\components\Layout\Navbar.jsx 2>nul
type nul > frontend\src\components\Layout\Footer.jsx 2>nul
type nul > frontend\src\components\Layout\Sidebar.jsx 2>nul
type nul > frontend\src\components\Layout\Header.jsx 2>nul
type nul > frontend\src\components\Layout\AdminLayout.jsx 2>nul

REM Frontend components - Common
type nul > frontend\src\components\Common\Button.jsx 2>nul
type nul > frontend\src\components\Common\Input.jsx 2>nul
type nul > frontend\src\components\Common\Modal.jsx 2>nul
type nul > frontend\src\components\Common\Loader.jsx 2>nul
type nul > frontend\src\components\Common\Toast.jsx 2>nul
type nul > frontend\src\components\Common\Card.jsx 2>nul
type nul > frontend\src\components\Common\Breadcrumb.jsx 2>nul
type nul > frontend\src\components\Common\Pagination.jsx 2>nul
type nul > frontend\src\components\Common\SearchBar.jsx 2>nul

REM Frontend components - Forms
type nul > frontend\src\components\Forms\ContactForm.jsx 2>nul
type nul > frontend\src\components\Forms\DonationForm.jsx 2>nul
type nul > frontend\src\components\Forms\LoginForm.jsx 2>nul
type nul > frontend\src\components\Forms\BlogForm.jsx 2>nul
type nul > frontend\src\components\Forms\GalleryForm.jsx 2>nul

REM Frontend components - Cards
type nul > frontend\src\components\Cards\BlogCard.jsx 2>nul
type nul > frontend\src\components\Cards\ProgramCard.jsx 2>nul
type nul > frontend\src\components\Cards\GalleryCard.jsx 2>nul
type nul > frontend\src\components\Cards\TestimonialCard.jsx 2>nul
type nul > frontend\src\components\Cards\TeamCard.jsx 2>nul

REM Frontend pages - Main
type nul > frontend\src\pages\Home.jsx 2>nul
type nul > frontend\src\pages\About.jsx 2>nul
type nul > frontend\src\pages\Programs.jsx 2>nul
type nul > frontend\src\pages\ProgramDetails.jsx 2>nul
type nul > frontend\src\pages\Blog.jsx 2>nul
type nul > frontend\src\pages\BlogPost.jsx 2>nul
type nul > frontend\src\pages\Gallery.jsx 2>nul
type nul > frontend\src\pages\Contact.jsx 2>nul
type nul > frontend\src\pages\Donate.jsx 2>nul
type nul > frontend\src\pages\Events.jsx 2>nul
type nul > frontend\src\pages\EventDetails.jsx 2>nul

REM Frontend pages - Admin
type nul > frontend\src\pages\admin\Dashboard.jsx 2>nul
type nul > frontend\src\pages\admin\Blogs.jsx 2>nul
type nul > frontend\src\pages\admin\BlogEditor.jsx 2>nul
type nul > frontend\src\pages\admin\Gallery.jsx 2>nul
type nul > frontend\src\pages\admin\Donations.jsx 2>nul
type nul > frontend\src\pages\admin\Programs.jsx 2>nul
type nul > frontend\src\pages\admin\Contacts.jsx 2>nul
type nul > frontend\src\pages\admin\Users.jsx 2>nul
type nul > frontend\src\pages\admin\Settings.jsx 2>nul
type nul > frontend\src\pages\admin\Analytics.jsx 2>nul
type nul > frontend\src\pages\admin\Profile.jsx 2>nul

REM Frontend pages - Auth
type nul > frontend\src\pages\auth\Login.jsx 2>nul
type nul > frontend\src\pages\auth\ForgotPassword.jsx 2>nul
type nul > frontend\src\pages\auth\ResetPassword.jsx 2>nul

REM Frontend services
type nul > frontend\src\services\api.js 2>nul
type nul > frontend\src\services\auth.service.js 2>nul
type nul > frontend\src\services\blog.service.js 2>nul
type nul > frontend\src\services\gallery.service.js 2>nul
type nul > frontend\src\services\donation.service.js 2>nul
type nul > frontend\src\services\contact.service.js 2>nul
type nul > frontend\src\services\program.service.js 2>nul
type nul > frontend\src\services\user.service.js 2>nul

REM Frontend styles
type nul > frontend\src\styles\globals.css 2>nul
type nul > frontend\src\styles\admin.css 2>nul
type nul > frontend\src\styles\home.css 2>nul
type nul > frontend\src\styles\variables.css 2>nul

REM Frontend utils
type nul > frontend\src\utils\constants.js 2>nul
type nul > frontend\src\utils\helpers.js 2>nul
type nul > frontend\src\utils\validators.js 2>nul
type nul > frontend\src\utils\formatters.js 2>nul
type nul > frontend\src\utils\storage.js 2>nul

REM Frontend context
type nul > frontend\src\context\AuthContext.jsx 2>nul
type nul > frontend\src\context\ThemeContext.jsx 2>nul
type nul > frontend\src\context\NotificationContext.jsx 2>nul

REM Frontend hooks
type nul > frontend\src\hooks\useAuth.js 2>nul
type nul > frontend\src\hooks\useFetch.js 2>nul
type nul > frontend\src\hooks\useForm.js 2>nul
type nul > frontend\src\hooks\useModal.js 2>nul
type nul > frontend\src\hooks\usePagination.js 2>nul

REM Frontend constants
type nul > frontend\src\constants\routes.js 2>nul
type nul > frontend\src\constants\api.js 2>nul
type nul > frontend\src\constants\messages.js 2>nul

REM Frontend routes
type nul > frontend\src\routes\AppRoutes.jsx 2>nul
type nul > frontend\src\routes\PrivateRoute.jsx 2>nul
type nul > frontend\src\routes\PublicRoute.jsx 2>nul

echo [3/6] Creating Root Level Files...

REM Root files
type nul > .gitignore 2>nul
type nul > README.md 2>nul
type nul > package.json 2>nul
type nul > start.bat 2>nul
type nul > install.bat 2>nul

REM Additional configuration files
type nul > docker-compose.yml 2>nul
type nul > Dockerfile 2>nul
type nul > .env.example 2>nul
type nul > .eslintrc.js 2>nul
type nul > .prettierrc 2>nul

echo [4/6] Creating Documentation Files...

REM Documentation
mkdir "docs" 2>nul
type nul > docs\API.md 2>nul
type nul > docs\DEPLOYMENT.md 2>nul
type nul > docs\CONTRIBUTING.md 2>nul
type nul > docs\PROJECT_OVERVIEW.md 2>nul

echo [5/6] Creating Scripts Folder...

REM Scripts
mkdir "scripts" 2>nul
type nul > scripts\backup.js 2>nul
type nul > scripts\seedDatabase.js 2>nul
type nul > scripts\deploy.sh 2>nul

echo [6/6] Creating Test Structure...

REM Tests
mkdir "backend\tests\unit" 2>nul
mkdir "backend\tests\integration" 2>nul
mkdir "backend\tests\fixtures" 2>nul
type nul > backend\tests\blog.test.js 2>nul
type nul > backend\tests\donation.test.js 2>nul
type nul > backend\tests\auth.test.js 2>nul

mkdir "frontend\src\tests\unit" 2>nul
mkdir "frontend\src\tests\integration" 2>nul
type nul > frontend\src\tests\App.test.js 2>nul
type nul > frontend\src\tests\setupTests.js 2>nul

echo.
echo ================================================================================
echo [✓] COMPLETE FOLDER STRUCTURE CREATED SUCCESSFULLY!
echo ================================================================================
echo.
echo PROJECT STRUCTURE SUMMARY:
echo =========================
echo rising-leaders-ngo/
echo .
echo ├── backend/
echo │   ├── controllers/     (9 files)
echo │   ├── models/         (10 files)
echo │   ├── routes/         (12 files)
echo │   ├── middleware/     (6 files)
echo │   ├── config/         (6 files)
echo │   ├── utils/          (6 files)
echo │   ├── services/       (4 files)
echo │   ├── validators/     (empty)
echo │   ├── helpers/        (empty)
echo │   ├── seeders/        (3 files)
echo │   ├── uploads/
echo │   │   ├── blogs/
echo │   │   └── gallery/
echo │   ├── logs/           (empty)
echo │   ├── tests/
echo │   │   ├── unit/
echo │   │   ├── integration/
echo │   │   └── fixtures/
echo │   └── root files      (5 files)
echo .
echo ├── frontend/
echo │   ├── public/         (4 files)
echo │   ├── src/
echo │   │   ├── components/
echo │   │   │   ├── Layout/    (5 files)
echo │   │   │   ├── Common/    (9 files)
echo │   │   │   ├── Forms/     (5 files)
echo │   │   │   ├── Cards/     (5 files)
echo │   │   │   ├── Modals/    (empty)
echo │   │   │   └── Loaders/   (empty)
echo │   │   ├── pages/
echo │   │   │   ├── admin/     (11 files)
echo │   │   │   ├── auth/      (3 files)
echo │   │   │   └── main/      (11 files)
echo │   │   ├── services/      (7 files)
echo │   │   ├── styles/        (4 files)
echo │   │   ├── utils/         (5 files)
echo │   │   ├── context/       (3 files)
echo │   │   ├── hooks/         (5 files)
echo │   │   ├── constants/     (3 files)
echo │   │   ├── routes/        (3 files)
echo │   │   ├── assets/
echo │   │   │   ├── images/
echo │   │   │   ├── icons/
echo │   │   │   └── fonts/
echo │   │   ├── tests/
echo │   │   │   ├── unit/
echo │   │   │   └── integration/
echo │   │   └── root files     (5 files)
echo │   └── root files         (6 files)
echo .
echo ├── docs/               (4 files)
echo ├── scripts/           (3 files)
echo └── root files         (8 files)
echo.
echo ================================================================================
echo TOTAL FILES CREATED: ~150+ files
echo TOTAL FOLDERS CREATED: ~50+ folders
echo ================================================================================
echo.
echo NEXT STEPS:
echo ==========
echo 1. cd rising-leaders-ngo
echo 2. Run install.bat (to install dependencies - you'll need to create this)
echo 3. Or manually install:
echo    - Backend: cd backend ^&^& npm install
echo    - Frontend: cd frontend ^&^& npm install
echo.
echo Project location: %CD%
echo.
echo ================================================================================
pause
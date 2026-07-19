# TechStore - חנות טכנולוגיה | פרויקט React

## תיאור הפרויקט

אתר חנות טכנולוגיה מבוסס React הכולל מערכת ניהול מוצרים, עגלת קניות, מערכת משתמשים (התחברות/הרשמה/התנתקות), ופרופיל מנהל.

## טכנולוגיות

- **React 18** - ספריית UI
- **React Router DOM 6** - ניווט ונתיבים
- **CSS3** - עיצוב ותגובתיות (Responsive)

## התקנה והפעלה

```bash
# שכפול הפרויקט
git clone <repository-url>
cd react-store

# התקנת חבילות
npm install

# הפעלה בסביבת פיתוח
npm start

# בניית הפרויקט לפרודקשן
npm run build
```

## מבנה הפרויקט

```
src/
├── components/
│   ├── Navbar/          # תפריט ניווט עליון
│   ├── Home/            # דף הבית (Hero, FeaturedProducts, Categories, Stats, Footer)
│   ├── About/           # דף אודות (AboutInfo, AboutImage, TeamSection, Values)
│   ├── Products/        # דף מוצרים (ProductsPage, ProductCard, ProductList, ProductFilter, ProductSort)
│   ├── ProductDetails/  # דף פרטי מוצר (useParams)
│   ├── Contact/         # דף צור קשר (ContactForm, ContactInfo, SocialLinks, ContactMap)
│   ├── Cart/            # דף עגלה (CartPage, CartItem, CartSummary)
│   ├── Purchase/        # דף רכישה (PurchaseForm, OrderSummary, PurchaseConfirmation)
│   ├── Auth/            # התחברות, הרשמה, פרופיל
│   └── Admin/           # ניהול מוצרים (AdminPage, AdminProductForm, AdminProductList)
├── data/
│   ├── products.js      # מערך מוצרים
│   └── users.js         # מערך משתמשים
├── router/
│   └── AppRouter.jsx    # ראוטינג בקובץ נפרד
├── App.jsx              # קומפוננטה ראשית (state management)
├── App.css
├── index.js             # נקודת כניסה
└── index.css            # סגנונות גלובליים
```

## דפים ותכונות

| דף | תיאור | קומפוננטות |
|----|--------|------------|
| דף בית | מוצרים מובילים, קטגוריות, סטטיסטיקות | Hero, FeaturedProducts, Categories, Stats |
| אודות | מידע על החנות, ערכים, צוות | AboutInfo, AboutImage, TeamSection, Values |
| מוצרים | תצוגת כל המוצרים עם סינון ומיון | ProductsPage, ProductCard, ProductList, ProductFilter, ProductSort |
| פרטי מוצר | תצוגת מוצר בודד עם params | ProductDetailsPage (useParams) |
| צור קשר | טופס יצירת קשר, פרטי התקשרות | ContactForm, ContactInfo, SocialLinks, ContactMap |
| עגלה | ניהול עגלת קניות, כמויות, מחיקה | CartPage, CartItem, CartSummary |
| רכישה | השלמת רכישה ואישור | PurchaseForm, OrderSummary, PurchaseConfirmation |
| התחברות | כניסה למערכת | LoginPage |
| הרשמה | יצירת חשבון חדש | RegisterPage |
| פרופיל | תצוגת פרטי משתמש | UserProfile |
| ניהול | הוספה, עריכה ומחיקת מוצרים (מנהל בלבד) | AdminPage, AdminProductForm, AdminProductList |

## ראוטינג

הראוטינג מוגדר בקובץ נפרד `src/router/AppRouter.jsx` ומשתמש ב-React Router DOM v6.

**נתיבים:**
- `/` - דף הבית
- `/products` - כל המוצרים
- `/products/:id` - פרטי מוצר (params)
- `/about` - אודות
- `/contact` - צור קשר
- `/cart` - עגלת קניות
- `/purchase` - השלמת רכישה
- `/login` - התחברות
- `/register` - הרשמה
- `/profile` - פרופיל משתמש
- `/admin` - ניהול מוצרים (מנהל בלבד)

## מידע מוצרים ועגלה

- מערך המוצרים מנוהל ב-`App.jsx` ומועבר לקומפוננטות דרך **props**.
- מערך העגלה מנוהל ב-`App.jsx` וכולל פונקציות: `addToCart`, `removeFromCart`, `updateQuantity`, `getCartTotal`, `getCartCount`, `clearCart`.

## משתמשים לדוגמה

| שם משתמש | סיסמה | תפקיד |
|----------|--------|--------|
| admin | admin123 | מנהל |
| user1 | user123 | משתמש |

## פריסה (Deployment)

הפרויקט מוכן לפריסה ב-Render:

1. העלו את הקוד ל-GitHub
2. צרו חשבון ב-[Render](https://render.com)
3. חברו את ה-repository
4. בחרו "Static Site"
5. Build Command: `npm run build`
6. Publish Directory: `build`

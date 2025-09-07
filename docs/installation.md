# تثبيت n8n


n8n
تنجم تركّبها بعدة طرق حسب شنوّة يناسبك:
**npm، Docker، Windows/Mac، أو Gitpod**.  
هاني باش نشرحلك كل طريقة خطوة بخطوة.

---

## 1️⃣ التثبيت عن طريق npm (Node.js)

### الخطوة 1: تأكّد أنّ عندك Node.js
```bash
node -v
npm -v
```
- يلزم Node.js version 18 ولا أكثر.

### الخطوة 2: تثبيت n8n عالميّاً
```bash
npm install n8n -g
```

### الخطوة 3: تشغيل n8n
```bash
n8n
```

- بعدها افتح المتصفح على:
```
http://localhost:5678
```
- توا ready باش تعمل workflows.

---

## 2️⃣ التثبيت عن طريق Docker

### الخطوة 1: تأكّد أنّ Docker منصّب
```bash
docker -v
```

### الخطوة 2: تشغيل n8n في container
```bash
docker run -it --rm \
  -p 5678:5678 \
  n8nio/n8n
```

- `-p 5678:5678` → باش تربط port الداخلي بالمكانّي.  
- افتح المتصفح على: `http://localhost:5678`  

💡 تنجم تعمل **persistent data** باستعمال volume باش تحفظ workflows بعد restart:

```bash
docker run -it --rm \
  -p 5678:5678 \
  -v ~/.n8n:/home/node/.n8n \
  n8nio/n8n
```

---

## 3️⃣ التثبيت على Windows / Mac

### Windows:
- نزّل installer الرسمي من: [n8n.io](https://n8n.io/)  
- ركّب البرنامج و اتبع التعليمات.  
- شغّل التطبيق و افتح المتصفح على `http://localhost:5678`.

### Mac:
- استعمل Homebrew:
```bash
brew install n8n
n8n
```
- افتح المتصفح على `http://localhost:5678`.

---

## 4️⃣ التثبيت على Gitpod (مناسب للتجربة السريعة)

### الخطوة 1: فتح workspace في Gitpod

- استعمل repository متاعك: `https://gitpod.io/#<repo-url>`

### الخطوة 2: تثبيت n8n
```bash
npm install n8n -g
```

### الخطوة 3: تشغيل n8n على Gitpod
```bash
n8n start --tunnel
```

- الأمر `--tunnel` يخلي n8n accessible من الإنترنت عبر Gitpod URL.  
- Gitpod يعطيك **link مباشر** تفتح فيه n8n.

---

✅ هكا تكون ركّبت n8n بالطرق الكلّ، و تولّي جاهز باش تعمل workflows، automation، وتستكشف جميع الميزات.

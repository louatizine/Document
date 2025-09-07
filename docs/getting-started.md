# باش تبدأ مع n8n

هاني باش نورّيك الخطوات الأولى باش تبدأ تستعمل n8n وتعمل أول workflow.

---

## 1️⃣ تأكّد من البيئة

- Node.js >=18 لازم يكون منصّب.
- إذا باش تستعمل Docker، Docker لازم يكون منصّب.
- إذا باش تستعمل Gitpod، workspace جاهز.

---

## 2️⃣ تشغيل n8n

### عبر npm:
```bash
n8n
```
- افتح المتصفح على:
```
http://localhost:5678
```

### عبر Docker:
```bash
docker run -it --rm -p 5678:5678 n8nio/n8n
```
- افتح المتصفح على نفس ال-port.

### عبر Gitpod:
```bash
n8n start --tunnel
```
- Gitpod يعطيك link مباشر باش تفتح n8n.

---

## 3️⃣ إنشاء أول Workflow

1. افتح Dashboard تاع n8n.  
2. إضغط على **New Workflow**.  
3. شوف ال **Start Node** (Node البداية).  
4. جرب تحط **HTTP Request Node** أو أي Node آخر.  
5. وصّل ال-nodes مع بعض حسب المنطق.  
6. إضغط **Execute Workflow** باش تشوف النتيجة.

---

## 4️⃣ نصائح للمبتدئين

- جرب nodes بسيطة قبل ما تعمل workflow معقد.  
- إستعمل **documentation الرسمي** و **community forum** إذا لزم.  
- حاول تحفظ workflow باش تنجم تعاود تستعمله.

---

✅ توا أنت جاهز باش تبدأ تستعمل n8n وتعمل automation للمهام متاعك بسهولة.

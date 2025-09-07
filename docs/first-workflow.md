# أول Workflow سهل في n8n

هوني باش نوريك workflow بسيط يورّيك **basic nodes** وكيفاش تعمل automation خطوة بخطوة.

---

## مثال: إرسال رسالة تلقائية على Slack كل يوم

### 1️⃣ الأدوات اللازمة:

- n8n منصّب و dashboard مفتوح.  
- حساب Slack (يمكن يكون **free** أو **paid**).  
- Node: **Cron** + **Slack**.

---

### 2️⃣ خطوات إنشاء workflow:

#### الخطوة 1: Node البداية (Trigger)
1. إضغط **New Workflow**.  
2. إسحب Node إسمها **Cron**.  
3. ظبط Cron باش يشتغل كل يوم على الساعة 9:00 صباحاً.  

#### الخطوة 2: Node الأكشن (Action)
1. إسحب Node إسمها **Slack**.  
2. إختار **Send Message**.  
3. وصل Cron Node بال-Slack Node.  
4. ظبط القناة (Channel) و الرسالة (مثال: "صباح الخير! Workflow n8n خدم اليوم").  

> 💡 ملاحظة: إذا تحب تستعمل ميزات أكثر، Slack عندو بعض **paid plans** لي يسمحلك بزاف خيارات إضافية.

#### الخطوة 3: تجربة الـ Workflow
1. إضغط **Execute Workflow** باش تتأكّد إنو كل شي يخدم.  
2. شوف الرسالة توصل على Slack.

---

### 3️⃣ نصائح للمبتدئين

- إبدا بالـ **free nodes** قبل ما تدخل الـ paid services.  
- جرّب workflow بسيط قبل ما تعمل workflows كبيرة ومعقدة.  
- إستعمل **documentation الرسمي** و **community forum** للـ examples.

---

✅ هكا workflow بسيط يوريك أساسيات n8n: **Trigger → Action → Execute**.  
توا تنجم تبدأ تزيد nodes أخرى، تعمل conditions، transformations، و حتى integrations مع Google Sheets، Gmail، APIs…  

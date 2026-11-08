# สื่อการสอนออนไลน์รายวิชาไมโครคอนโทรลเลอร์และการประยุกต์

> EN-132-004 Microcontrollers and Applications 3 (2-2-5) — Next.js e-Learning Site

เว็บไซต์สื่อการสอนออนไลน์ของรายวิชา EN-132-004 ไมโครคอนโทรลเลอร์และการประยุกต์ 9 หน่วยเรียน พร้อมใบงานภาคปฏิบัติ แบบฝึกหัด และแบบทดสอบก่อน/หลังเรียน
เนื้อหาทั้งหมดนำมาจาก **เอกสารประกอบการสอน EN-132-004 ฉบับสมบูรณ์ (R1)** ได้แก่ ใบความรู้ แผนการจัดการเรียนรู้
ใบงานปฏิบัติ แบบฝึกหัดท้ายหน่วยพร้อมเฉลย แบบทดสอบก่อนเรียน/หลังเรียน และข้อมูลรายวิชา
โครงเว็บใช้ template จาก [EN-012-314-AI](https://github.com/babankbro/EN-012-314-AI)

## รันด้วย Docker (แนะนำ)

ต้องติดตั้ง [Docker Desktop](https://www.docker.com/products/docker-desktop/) ก่อน แล้วเปิด Terminal / PowerShell ในโฟลเดอร์นี้

```bash
docker compose up -d --build     # build และเปิดเว็บ → http://localhost:8060
docker compose logs -f           # ดู log
docker compose down              # หยุดเว็บ
```

แก้เนื้อหาใน `content/` แล้วสั่ง `docker compose up -d --build` อีกครั้งเพื่อ build ใหม่

หากไม่ใช้ compose:

```bash
docker build -t en-132-004-microcontroller-elearning .
docker run -d -p 8060:3000 --name microcontroller-elearning en-132-004-microcontroller-elearning
```

## รันด้วย Node.js (สำหรับแก้ไขเนื้อหา)

ต้องใช้ Node.js 18.17 ขึ้นไป (แนะนำ 20)

```bash
npm install
npm run dev          # เปิด http://localhost:8060 (แก้ไฟล์แล้วรีเฟรชได้ทันที)
npm run check        # ตรวจความครบถ้วนและรูปแบบของเนื้อหา
npm run build && npm start
```

## หน่วยเรียน

| หน่วย | สัปดาห์ | ชื่อหน่วยเรียน | ท | ป | CLO | ใบงานปฏิบัติ |
|---|---|---|---|---|---|---|
| 1 | 1 | โครงสร้างและหลักการทำงานของไมโครโพรเซสเซอร์และไมโครคอนโทรลเลอร์ | 2 | 2 | CLO1, CLO2 | เลขฐานสองกับ GPIO: ตัวนับ 4 บิตด้วย LED และปุ่มกด พร้อมอ่านค่า ADC 12 บิตจาก LDR ผ่านบอร์ด ESP32 และแสดงผลบน VS Code Dashboard |
| 2 | 2–3 | การเขียนโปรแกรมสำหรับไมโครคอนโทรลเลอร์ด้วย MicroPython | 4 | 4 | CLO2, CLO3 | ไฟวิ่ง 8 บิตด้วยการ Shift/Rotate เลือกโหมดด้วยปุ่ม ปรับความเร็วด้วย Timer และแสดงผลบน VS Code Dashboard |
| 3 | 4 | การควบคุมมอเตอร์ไฟฟ้ากระแสตรงด้วยไมโครคอนโทรลเลอร์ | 2 | 2 | CLO3 | ควบคุมมอเตอร์ DC ด้วย H-Bridge: กลับทิศด้วย State Machine ปรับความเร็วด้วย PWM และ Soft start แสดงผลบน VS Code Dashboard |
| 4 | 5–6 | การเขียนโปรแกรมควบคุมแบบต่อเนื่อง | 4 | 4 | CLO3 | ควบคุมอุณหภูมิต่อเนื่อง: อ่านเทอร์มิสเตอร์ด้วย ADC กรองสัญญาณ ควบคุมพัดลมแบบฮิสเทอรีซิส และปรับมุมแดมเปอร์ด้วยสเตปปิ้งมอเตอร์ แสดงผลบน VS Code Dashboard |
| 5 | 7 | โปรแกรมขัดจังหวะ (Interrupt) ในไมโครคอนโทรลเลอร์ | 2 | 2 | CLO2 | นับพัลส์ด้วย Interrupt พร้อมดีบาวน์ สุ่ม ADC ด้วย Timer และแสดงความเร็วรอบบน VS Code Dashboard |
| 6 | 9–10 | การสื่อสารแบบอนุกรม | 4 | 4 | CLO2 | HMI ผ่านพอร์ตอนุกรม: อ่าน SHT30 ด้วย I2C ควบคุมเซอร์โวและ LED ด้วยคำสั่ง ASCII และทดสอบ UART loopback แสดงผลบน VS Code Dashboard |
| 7 | 11–12 | เซนเซอร์และการประยุกต์ใช้งาน | 4 | 4 | CLO2 | อ่านอุณหภูมิ DS18B20 (1-Wire) แสดงผลบน OLED และรับรหัส PIN จาก Keypad 4x4 พร้อมส่งข้อมูลขึ้น VS Code Dashboard |
| 8 | 13–14 | การดีบักและการบำรุงรักษา | 4 | 4 | CLO2, CLO3 | สคริปต์ตรวจสอบตัวเอง (Self-diagnostic) บันทึกล็อก บังคับเอาต์พุตจาก REPL และสำรอง/กู้คืนโปรแกรมด้วย mpremote พร้อม Dashboard |
| 9 | 15–16 | การประยุกต์ใช้ไมโครคอนโทรลเลอร์ในงานอุตสาหกรรม | 4 | 4 | CLO3, CLO4 | ตัวควบคุมกระบวนการขนาดเล็ก (ระดับ–อุณหภูมิ) ด้วยเครื่องสถานะ ฮิสเทอรีซิส สัญญาณเตือน และบันทึกข้อมูลบน VS Code Dashboard |
| | | **รวม** | **30** | **30** | | **9 ใบงาน** |

สอบกลางภาคสัปดาห์ที่ 8 (หน่วยที่ 1–5) และสอบปลายภาคสัปดาห์ที่ 17 (หน่วยที่ 6–9)

## โครงสร้างโปรเจกต์

```
├── app/
│   ├── page.tsx                  ← หน้าหลัก (ภาพรวมรายวิชา + CLO)
│   ├── course-info/page.tsx      ← ข้อมูลรายวิชา (content/course-info.md)
│   ├── module/[id]/page.tsx      ← ใบความรู้ + จุดประสงค์ + แบบฝึกหัดพร้อมเฉลย
│   ├── plan/[id]/page.tsx        ← แผนการจัดการเรียนรู้ประจำหน่วย
│   ├── lab/[id]/page.tsx         ← ใบงานปฏิบัติ (พิมพ์/บันทึก PDF ได้)
│   ├── exam/[kind]/[id]/page.tsx ← แบบทดสอบก่อนเรียน (pre) / หลังเรียน (post)
│   └── api/content/[...path]/    ← ให้บริการไฟล์ใน content/ (Review Sheet)
├── components/                   ← Header, Sidebar, MarkdownContent, ExamClient, PrintButton ฯลฯ
├── lib/
│   ├── course.ts                 ← ข้อมูลรายวิชาและ CLOs
│   ├── modules-data.ts           ← ข้อมูล 9 หน่วย (สัปดาห์ ชั่วโมง ท/ป CLO หัวข้อ)
│   ├── exam-types.ts             ← ชนิดข้อมูลแบบทดสอบ
│   └── content.ts                ← อ่าน markdown / exam JSON
├── content/
│   ├── course-info.md            ← ข้อมูลรายวิชา
│   ├── modules/module-XX.md      ← ใบความรู้
│   ├── plans/plan-XX.md          ← แผนการจัดการเรียนรู้
│   ├── labs/lab-XX.md            ← ใบงานปฏิบัติ
│   ├── exams/pre-XX.json         ← แบบทดสอบก่อนเรียน 10 ข้อ
│   ├── exams/post-XX.json        ← แบบทดสอบหลังเรียน 10 ข้อ
│   └── SHEET/review_sheet_XX.html← แบบทบทวน 1 หน้า A4
├── public/images/book/           ← รูปประกอบจากเอกสารประกอบการสอน
├── Dockerfile · docker-compose.yml
└── CONTENT_GUIDE.md              ← คู่มือแก้ไขเนื้อหา
```

## ฟีเจอร์

- **Docs-style Layout** — Sidebar + Content, Dark/Light Mode, ค้นหา (Ctrl+K), Responsive
- **ใบความรู้** พร้อมรูปประกอบ ตาราง จุดประสงค์การสอน แบบฝึกหัดท้ายหน่วย (กดดูเฉลยได้) และบรรณานุกรม APA 7
- **แผนการจัดการเรียนรู้** และ **ใบงานปฏิบัติ** — พิมพ์หรือบันทึกเป็น PDF ได้
- **แบบทดสอบก่อนเรียน/หลังเรียน** หน่วยละ 10 ข้อ 5 ตัวเลือก จับเวลา ตรวจอัตโนมัติ แสดงเฉลย และพิมพ์ผลได้ (เกณฑ์ผ่านร้อยละ 50)
- **Review Sheet** สรุป 1 หน้า A4 ต่อหน่วย

## เทคโนโลยี

Next.js 14 (App Router, output standalone) · TailwindCSS · react-markdown + remark-gfm + rehype-raw · Lucide React · ฟอนต์ Prompt (@fontsource, ไม่ต้องโหลดจาก Google ตอน build)

---

**ผู้จัดทำ:** อาจารย์ศิวณุ เหล่าบุตรสา  
**หลักสูตร:** วิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมเมคคาทรอนิกส์ (หลักสูตรปรับปรุง พ.ศ. 2568) คณะวิศวกรรมศาสตร์และเทคโนโลยีอุตสาหกรรม มหาวิทยาลัยกาฬสินธุ์  
**ภาคการศึกษา:** 2

export interface ModuleData {
  id: string;
  week: string;
  titleTh: string;
  titleEn: string;
  description: string;
  clo: string;
  hoursT: number;
  hoursP: number;
  topics: string[];
  labTitle: string;
  labCount: number;
  reviewSheet: string;
  icon: string;
  color: string;
}

// 9 หน่วยเรียน ตามเอกสารประกอบการสอน EN-132-004 ฉบับสมบูรณ์ R1 (สัปดาห์ ชั่วโมง ท/ป CLO ตามหัวแผนการจัดการเรียนรู้ หัวข้อ)
export const modules: ModuleData[] = [
  {
    id: "01",
    week: "1",
    titleTh: "โครงสร้างและหลักการทำงานของไมโครโพรเซสเซอร์และไมโครคอนโทรลเลอร์",
    titleEn: "Structure and Principles of Microprocessors and Microcontrollers",
    description:
      "ไมโครโพรเซสเซอร์ (Microprocessor) คือหน่วยประมวลผลกลางที่ต้องอาศัยหน่วยความจำและอุปกรณ์ I/O ภายนอกจึงจะทำงานเป็นระบบได้ ส่วนไมโครคอนโทรลเลอร์ (Microcontroller, MCU) รวม CPU หน่วยความจำโปรแกรม (Flash) หน่วยความจำข้อมูล (SRAM) …",
    clo: "CLO1, CLO2",
    hoursT: 2,
    hoursP: 2,
    topics: ["1.1 ระบบควบคุมทางอิเล็กทรอนิกส์และระบบเลขฐาน", "1.2 โครงสร้างและสถาปัตยกรรมของไมโครโพรเซสเซอร์/ไมโครคอนโทรลเลอร์", "1.3 หน่วยความจำและการจัดการพอร์ต I/O", "1.4 ตระกูลไมโครคอนโทรลเลอร์และการพัฒนาโปรแกรม"],
    labTitle: "เลขฐานสองกับ GPIO: ตัวนับ 4 บิตด้วย LED และปุ่มกด พร้อมอ่านค่า ADC 12 บิตจาก LDR ผ่านบอร์ด ESP32 และแสดงผลบน VS Code Dashboard",
    labCount: 1,
    reviewSheet: "review_sheet_01.html",
    icon: "Cpu",
    color: "slate",
  },
  {
    id: "02",
    week: "2–3",
    titleTh: "การเขียนโปรแกรมสำหรับไมโครคอนโทรลเลอร์ด้วย MicroPython",
    titleEn: "Programming Microcontrollers with MicroPython",
    description:
      "โปรแกรมไมโครคอนโทรลเลอร์ด้วย MicroPython ประกอบด้วยส่วนนำเข้าโมดูล การกำหนดค่าขา GPIO และ Timer การนิยามฟังก์ชัน และลูปหลักที่อ่านอินพุต ตัดสินใจ และสั่งเอาต์พุตซ้ำ ๆ การทำงานกับบิตด้วยตัวดำเนินการ & | ^ ~ > ทำให้ควบคุมกลุ่ม LED …",
    clo: "CLO2, CLO3",
    hoursT: 4,
    hoursP: 4,
    topics: ["2.1 ตัวแปร โครงสร้างโปรแกรม และการควบคุม GPIO", "2.2 Timer และ Counter ของไมโครคอนโทรลเลอร์", "2.3 การตั้ง ล้าง และสลับบิต (Set/Clear/Toggle)", "2.4 ฟังก์ชันและโปรแกรมย่อย", "2.5 การเปรียบเทียบและคำนวณทางคณิตศาสตร์", "2.6 การเลื่อนและหมุนบิต (Shift/Rotate)", "2.7 การประยุกต์ใช้โครงสร้างควบคุมตามเงื่อนไข"],
    labTitle: "ไฟวิ่ง 8 บิตด้วยการ Shift/Rotate เลือกโหมดด้วยปุ่ม ปรับความเร็วด้วย Timer และแสดงผลบน VS Code Dashboard",
    labCount: 1,
    reviewSheet: "review_sheet_02.html",
    icon: "Code",
    color: "blue",
  },
  {
    id: "03",
    week: "4",
    titleTh: "การควบคุมมอเตอร์ไฟฟ้ากระแสตรงด้วยไมโครคอนโทรลเลอร์",
    titleEn: "DC Motor Control with Microcontrollers",
    description:
      "การควบคุมแบบซีเควนซ์ทำให้ระบบเปลี่ยนจากขั้นตอนหนึ่งไปอีกขั้นตอนหนึ่งเมื่อเงื่อนไขเป็นจริง ออกแบบได้ด้วยแผนภาพสถานะและตารางขั้นตอน มอเตอร์ไฟฟ้ากระแสตรงต้องขับผ่านวงจรขับ (H-Bridge) ซึ่งกลับทิศทางได้ด้วยการสลับสวิตช์ …",
    clo: "CLO3",
    hoursT: 2,
    hoursP: 2,
    topics: ["3.1 หลักการออกแบบ Sequential Control", "3.2 Step Sequence และ State Diagram", "3.3 H-Bridge และการควบคุมความเร็วด้วย PWM", "3.4 กำลังไฟฟ้าและพลังงานของมอเตอร์"],
    labTitle: "ควบคุมมอเตอร์ DC ด้วย H-Bridge: กลับทิศด้วย State Machine ปรับความเร็วด้วย PWM และ Soft start แสดงผลบน VS Code Dashboard",
    labCount: 1,
    reviewSheet: "review_sheet_03.html",
    icon: "Zap",
    color: "green",
  },
  {
    id: "04",
    week: "5–6",
    titleTh: "การเขียนโปรแกรมควบคุมแบบต่อเนื่อง",
    titleEn: "Continuous Control Programming",
    description:
      "การควบคุมแบบต่อเนื่องคือการอ่านค่าตัวแปรกระบวนการซ้ำ ๆ เปรียบเทียบกับค่าที่ตั้งไว้ แล้วปรับเอาต์พุตตามผลต่าง เช่น ควบคุมอุณหภูมิแบบ ON/OFF ที่มีช่วงฮิสเทอรีซิสหรือแบบสัดส่วน (P) มอเตอร์ AC …",
    clo: "CLO3",
    hoursT: 4,
    hoursP: 4,
    topics: ["4.1 หลักการทำงานของมอเตอร์ AC และสเตปปิ้งมอเตอร์", "4.2 โปรแกรมวงจรการควบคุมแบบ Loop", "4.3 การออกแบบโปรแกรมควบคุมกระบวนการต่อเนื่อง", "4.4 หลักการแปลงสัญญาณ Analog-to-Digital (ADC)", "4.5 การอ่านค่าเซนเซอร์แบบอนาล็อกด้วยไมโครคอนโทรลเลอร์"],
    labTitle: "ควบคุมอุณหภูมิต่อเนื่อง: อ่านเทอร์มิสเตอร์ด้วย ADC กรองสัญญาณ ควบคุมพัดลมแบบฮิสเทอรีซิส และปรับมุมแดมเปอร์ด้วยสเตปปิ้งมอเตอร์ แสดงผลบน VS Code Dashboard",
    labCount: 1,
    reviewSheet: "review_sheet_04.html",
    icon: "Cog",
    color: "yellow",
  },
  {
    id: "05",
    week: "7",
    titleTh: "โปรแกรมขัดจังหวะ (Interrupt) ในไมโครคอนโทรลเลอร์",
    titleEn: "Interrupt Programming in Microcontrollers",
    description:
      "Interrupt ทำให้ไมโครคอนโทรลเลอร์หยุดงานหลักชั่วคราวเพื่อตอบสนองเหตุการณ์ทันที เช่น ขอบสัญญาณของขาหรือการครบเวลาของ Timer แล้วกลับไปทำงานหลักต่อ ฟังก์ชันบริการ (ISR) ต้องสั้นมาก ใช้ตั้งแฟล็กหรือนับค่า แล้วให้ลูปหลักประมวลผลต่อ …",
    clo: "CLO2",
    hoursT: 2,
    hoursP: 2,
    topics: ["5.1 การตั้งค่าพารามิเตอร์ ADC และ Timer", "5.2 ชนิดของ Interrupt และการจัดลำดับความสำคัญ", "5.3 การทดสอบและปรับแต่งพารามิเตอร์ (Debounce/ช่วงเวลา Timer)"],
    labTitle: "นับพัลส์ด้วย Interrupt พร้อมดีบาวน์ สุ่ม ADC ด้วย Timer และแสดงความเร็วรอบบน VS Code Dashboard",
    labCount: 1,
    reviewSheet: "review_sheet_05.html",
    icon: "Timer",
    color: "red",
  },
  {
    id: "06",
    week: "9–10",
    titleTh: "การสื่อสารแบบอนุกรม",
    titleEn: "Serial Communication",
    description:
      "การสื่อสารแบบอนุกรมช่วยให้ไมโครคอนโทรลเลอร์แลกเปลี่ยนข้อมูลกับคอมพิวเตอร์ โมดูล และเซนเซอร์โดยใช้สายน้อย UART เป็นแบบอะซิงโครนัสที่ต้องตั้งค่าบอดเรตและรูปแบบเฟรมให้ตรงกัน ส่วน I2C ใช้สองสายและแอดเดรสเลือกอุปกรณ์ และ SPI …",
    clo: "CLO2",
    hoursT: 4,
    hoursP: 4,
    topics: ["6.1 หลักการสื่อสารแบบ UART/USART", "6.2 การออกแบบหน้าจอ HMI สำหรับแสดงผลและควบคุม", "6.3 การสื่อสาร SPI และ I2C", "6.4 การเชื่อมต่อไมโครคอนโทรลเลอร์กับอุปกรณ์ภายนอก", "6.5 การควบคุมแขนกลและสายพานลำเลียงด้วยไมโครคอนโทรลเลอร์", "6.6 การประยุกต์ใช้ไมโครคอนโทรลเลอร์ควบคุมระบบเมคคาทรอนิกส์", "6.7 การออกแบบโปรแกรมควบคุมระบบอัตโนมัติ"],
    labTitle: "HMI ผ่านพอร์ตอนุกรม: อ่าน SHT30 ด้วย I2C ควบคุมเซอร์โวและ LED ด้วยคำสั่ง ASCII และทดสอบ UART loopback แสดงผลบน VS Code Dashboard",
    labCount: 1,
    reviewSheet: "review_sheet_06.html",
    icon: "Cable",
    color: "purple",
  },
  {
    id: "07",
    week: "11–12",
    titleTh: "เซนเซอร์และการประยุกต์ใช้งาน",
    titleEn: "Sensors and Applications",
    description:
      "เซนเซอร์และอุปกรณ์ในระบบฝังตัวสื่อสารด้วยโปรโตคอลที่ต่างกัน 1-Wire ใช้สายข้อมูลเดียวและรหัส ROM 64 บิต Modbus RTU เป็นโปรโตคอลมาสเตอร์/สเลฟที่นิยมในอุตสาหกรรมและตรวจข้อมูลด้วย CRC-16 จอ LCD/OLED แสดงค่าบนอุปกรณ์ ส่วน Keypad 4x4 …",
    clo: "CLO2",
    hoursT: 4,
    hoursP: 4,
    topics: ["7.1 โปรโตคอลที่ใช้กับเซนเซอร์", "7.2 เครื่องมือตรวจสอบสัญญาณการวัดและการสื่อสาร", "7.3 การแสดงผลด้วย LCD และ OLED", "7.4 การอ่านปุ่มกดแบบเมทริกซ์ Keypad", "7.5 การตรวจสอบการเดินสายและอินพุต/เอาต์พุต"],
    labTitle: "อ่านอุณหภูมิ DS18B20 (1-Wire) แสดงผลบน OLED และรับรหัส PIN จาก Keypad 4x4 พร้อมส่งข้อมูลขึ้น VS Code Dashboard",
    labCount: 1,
    reviewSheet: "review_sheet_07.html",
    icon: "Radar",
    color: "teal",
  },
  {
    id: "08",
    week: "13–14",
    titleTh: "การดีบักและการบำรุงรักษา",
    titleEn: "Debugging and Maintenance",
    description:
      "การดีบักอย่างเป็นระบบเริ่มจากการสังเกตอาการ ตั้งสมมติฐาน ทดสอบทีละจุด และบันทึกผล เครื่องมือหลักคือ print, REPL, assert และ try/except การบังคับเอาต์พุตผ่าน REPL ช่วยทดสอบฮาร์ดแวร์ทีละอุปกรณ์อย่างปลอดภัย การบำรุงรักษาเชิงป้องกัน …",
    clo: "CLO2, CLO3",
    hoursT: 4,
    hoursP: 4,
    topics: ["8.1 เทคนิคการดีบักโปรแกรมไมโครคอนโทรลเลอร์", "8.2 การบังคับเอาต์พุตและติดตามค่าผ่าน REPL/Serial", "8.3 การแก้ปัญหาเซนเซอร์และแอคชูเอเตอร์", "8.4 การบำรุงรักษาเชิงป้องกัน และ 8.5 การบำรุงรักษา", "8.6 การสำรองและกู้คืนโปรแกรม", "8.7 การอัปเดตเฟิร์มแวร์และบูตโหลดเดอร์"],
    labTitle: "สคริปต์ตรวจสอบตัวเอง (Self-diagnostic) บันทึกล็อก บังคับเอาต์พุตจาก REPL และสำรอง/กู้คืนโปรแกรมด้วย mpremote พร้อม Dashboard",
    labCount: 1,
    reviewSheet: "review_sheet_08.html",
    icon: "Wrench",
    color: "indigo",
  },
  {
    id: "09",
    week: "15–16",
    titleTh: "การประยุกต์ใช้ไมโครคอนโทรลเลอร์ในงานอุตสาหกรรม",
    titleEn: "Industrial Applications",
    description:
      "การประยุกต์ในงานอุตสาหกรรมรวมความรู้ทุกหน่วยเข้าด้วยกัน เริ่มจากกำหนดความต้องการและรายการ I/O ออกแบบเครื่องสถานะและกลยุทธ์ควบคุม เขียนโปรแกรมที่มีสถานะปลอดภัยและสัญญาณเตือน ทดสอบตามแผนและวิเคราะห์ผลด้วยตัวชี้วัด เช่น โอเวอร์ชูต …",
    clo: "CLO3, CLO4",
    hoursT: 4,
    hoursP: 4,
    topics: ["9.1 ตัวอย่างการประยุกต์ไมโครคอนโทรลเลอร์ในโรงงานอุตสาหกรรม", "9.2 การออกแบบโครงงานและการนำเสนอ", "9.3 การวิเคราะห์โครงงาน", "9.4 การออกแบบวงจรและโปรแกรมควบคุมกระบวนการ", "9.5 การทดสอบและการวิเคราะห์ผล", "9.6 การนำเสนอผลงานและสรุปรายวิชา"],
    labTitle: "ตัวควบคุมกระบวนการขนาดเล็ก (ระดับ–อุณหภูมิ) ด้วยเครื่องสถานะ ฮิสเทอรีซิส สัญญาณเตือน และบันทึกข้อมูลบน VS Code Dashboard",
    labCount: 1,
    reviewSheet: "review_sheet_09.html",
    icon: "Factory",
    color: "orange",
  },
];

export function getModuleById(id: string): ModuleData | undefined {
  return modules.find((m) => m.id === id);
}

export const colorMap: Record<string, { bg: string; text: string; border: string; accent: string }> = {
  slate: { bg: "bg-slate-100 dark:bg-slate-800/40", text: "text-slate-700 dark:text-slate-300", border: "border-slate-200 dark:border-slate-700", accent: "from-slate-500 to-gray-500" },
  blue: { bg: "bg-blue-50 dark:bg-blue-900/20", text: "text-blue-700 dark:text-blue-300", border: "border-blue-200 dark:border-blue-800", accent: "from-blue-500 to-cyan-500" },
  green: { bg: "bg-green-50 dark:bg-green-900/20", text: "text-green-700 dark:text-green-300", border: "border-green-200 dark:border-green-800", accent: "from-green-500 to-emerald-500" },
  yellow: { bg: "bg-yellow-50 dark:bg-yellow-900/20", text: "text-yellow-700 dark:text-yellow-300", border: "border-yellow-200 dark:border-yellow-800", accent: "from-yellow-500 to-orange-500" },
  red: { bg: "bg-red-50 dark:bg-red-900/20", text: "text-red-700 dark:text-red-300", border: "border-red-200 dark:border-red-800", accent: "from-red-500 to-pink-500" },
  purple: { bg: "bg-purple-50 dark:bg-purple-900/20", text: "text-purple-700 dark:text-purple-300", border: "border-purple-200 dark:border-purple-800", accent: "from-purple-500 to-violet-500" },
  teal: { bg: "bg-teal-50 dark:bg-teal-900/20", text: "text-teal-700 dark:text-teal-300", border: "border-teal-200 dark:border-teal-800", accent: "from-teal-500 to-cyan-500" },
  indigo: { bg: "bg-indigo-50 dark:bg-indigo-900/20", text: "text-indigo-700 dark:text-indigo-300", border: "border-indigo-200 dark:border-indigo-800", accent: "from-indigo-500 to-blue-500" },
  orange: { bg: "bg-orange-50 dark:bg-orange-900/20", text: "text-orange-700 dark:text-orange-300", border: "border-orange-200 dark:border-orange-800", accent: "from-orange-500 to-amber-500" },
  rose: { bg: "bg-rose-50 dark:bg-rose-900/20", text: "text-rose-700 dark:text-rose-300", border: "border-rose-200 dark:border-rose-800", accent: "from-rose-500 to-pink-500" },
};

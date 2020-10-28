// HUJI's courses:

var HUJI_faculties_list = [
	'הפקולטה למדעי הרוח',
	'הפקולטה למדעי הטבע',
	'הפקולטה למשפטים',
	'הפקולטה לרפואה',
	'הפקולטה לרפואת שיניים',
	'ביה"ס למנהל העסקים',
	'הפקולטה למדעי החברה',
	'הפקולטה לחקלאות',
	'ביה"ס לעבודה סוציאלית',
	'מרכז אדמונד ולילי ספרא למדעי המוח',
	'ביה"ס להנדסה ולמדעי המחשב',
	'מכינה',
	'תכניות מיוחדות'
];

var HUJI_courses_lists = new Array(13);
HUJI_courses_lists['הפקולטה למדעי הרוח'] = 
[
		'21101  -  מבוא למקרא  INTRODUCTION TO THE HEBREW BIBLE
',
		'21350  -  מבוא לפרשנות עתיקה  INTRODUCTION TO EXEGESIS
',
		'21109  -  ספר שופטים: בין מקורות לעריכה  BOOK OF JUDGES
',
		'21111  -  עיונים בספר מלכים  STUDIES IN THE BOOK OF KINGS
',
		'21515  -  פרשנות ימיהביניים  MEDIEVAL EXEGESIS
',
		'21123  -  ספרות המקרא על רקע המזרח הקדום: סוגיות נבחרות  BIB. LIT. IN THE LIGHT OF THE ANCIENT NEAR EAST: Selected topics
',
		'21836  -  בעיות בפירוש ספר יחזקאל  PROBLEMS IN EZEKIEL
',
		'21903  -  THE SEPTUAGINT OF EZRA AND NEHEMIAH  THE SEPTUAGINT OF EZRA AND NEHEMIAH
',
		'21913  -  עיונים במזמורי תהלים  Studies in the Psalms
',
		'21931  -  דרכי השירה המקראית: עקרונות ודוגמאות  The Poetics of Biblical Poetry: Principles and Examples
',
		'21933  -  עלילות גיבורים במקרא ובספרות האכדית, חלק ב  Hero Legends in Biblical and Akkadian Literatures, Part 2
',
		'21284  -  Psalms from the Second Temple Period  Psalms from the Second Temple Period
',
		'21927  -  The Dead Sea Scrolls  The Dead Sea Scrolls
',
		'21106  -  הדרכה ביבליוגרפית  BIBLIOGRAPHICAL GUIDANCE
',
		'21453  -  בחינת בקיאות חטיבה ב  PROFICIENCY EXAMINATION  B
',
		'7261  -  מבוא למשנה  INTRODUCTION TO THE MISHNAH
',
		'7716  -  מהלכים דיאלקטיים מקבילים בתלמוד הבבלי  Parallel Structures in the Babylonian Talmud
',
		'7900  -  מכינה בתלמוד: עיונים בתלמוד הבבלי ומחקרו  STUDIES IN THE BABYLONIAN TALMUD & ITS RESEARCH
',
		'7149  -  פליאוגרפיה וקודיקולוגיה של כתביהיד התלמודיים  Palaeoraphic and Codicological Aspects of Talmud Manuscripts
',
		'7711  -  עיונים בסוגיות הירושלמי בדגש על נוסח הגניזה  STUDIES IN TALMUD YERUSHALMI LIGHT OF THE GENIZAH FRAGMENTS
',
		'7713  -  עיונים באגדת הבבלי  Readings in the Agaddah of the Bavli
',
		'7819  -  ביקורת הטקסט בשימושם של חכמי ימי הביניים  Rabbinic Scholars and Textual Criticism
',
		'7143  -  המקדש במשנה מסכת יומא  The Temple in the Mishnah: Tractate Yoma
',
		'7150  -  מכינה בתלמוד (א)  TALMUD PREPARATORY COURSE (A)
',
		'7152  -  מכינה בתלמוד (ג)  TALMUD PREPARATORY COURSE (C)
',
		'13043  -  מבוא לעת החדשה המוקדמת 15001850  The Early Modern Period 15001850
',
		'13062  -  מבוא לעת החדשה המאוחרת 18502000  The Late Modern Period 18502000
',
		'13144  -  ממדינת מקדש לעם הספר  מבוא לתקופת הבית השני, המשנה והתלמוד  JEWS AND JUDAISM IN THE GRECOROMAN PERIOD
',
		'13266  -  מי אנחנו יהודי העולם  Who Are We? The Jewish People Today
',
		'13289  -  קווי יסוד בתולדות השואה  Major aspects in Holocaust history
',
		'13322  -  בצל הסהר חיי היהודים בימי הביניים בארצות האסלאם  Under the Crescent Medieval Jewish life in the Lands of Islam
',
		'33813  -  סוגיות ביהדות זמננו  Research in Contemporary Jewry
',
		'13024  -  עידן של תמורות: יהודים במאות יזיט  Jewish Society in the 17th19th Centuries
',
		'13220  -  מדעי החברה של היהודים  Social Sciences of Jews
',
		'13246  -  מקורות לחקר תולדות היהודים בתקופה ההלניסטית, הרומית והביזנטית  Sources for the Study of Ancient Jewish History
',
		'13183  -  יהדות ספרד בימי הביניים המאוחרים  בין פריחה לדעיכה  Spanish Jewry in the late Middle Ages Flourishing and Decay
',
		'13314  -  דילמות היסטוריות בקולנוע על השואה  Historical dilemmas in Holocaust films
',
		'13704  -  קריאה בשו"ת של יהודי האימפריה העותמאנית  Jewish Questions of the Ottoman Empire
',
		'13739  -  קריאה בתעודות הגניזה  Readings in Cairo Geniza documents
',
		'13749  -  קשרי ארץ ישראל והתפוצות בעת העתיקה ותמורות בזהות יהודית  Israel  Diaspora Relations in Antiquity
',
		'13751  -  יהודיי ויהדות מצרים מהתקופה ההלניסטית עד מרד התפוצות  Egyptian Jews and Judaism from the Hellenistic Period until the Diaspora Revolt
',
		'13757  -  יומנו של החיד"א  Hidas Travel Book
',
		'13805  -  מתחזים ושרלטנים: בין היסטוריה לספרות  Charlatans and Imposters: Between History and Literature
',
		'13830  -  תקופת המשנה והתלמוד: שבעים שנה אחרי גדליהו אלון  The Talmudic Period: Seventy Years After Alon
',
		'13839  -  שאלות בתולדות היהודים ברוסיה במאה ה20  Key Issues in 20th Century Russian Jewish History
',
		'13861  -  השלמות המהפכנית של העולם: יהודים מ1789  The revolutionary perfection of the world: the Jews from 1789
',
		'13894  -  משבר האמונה והכפירה: שבתאות, פרנקיזם, והתסיסה הדתית במאה הי"ח ביהדות מזרחמרכז אירופה  Sabbatean and Frankist Religious Dissent in Europe
',
		'33719  -  The 60s, the Jews, and American Society  The 60s, the Jews, and American Society
',
		'33817  -  כשהקיבוץ פגש את המדינה  The Kibbutz in the 1950s
',
		'13028  -  יהודי ירושלים במאות ט"זי"ט ע"פ תעודות הסגל  Jerusalems Jews, 16th19th c., according to the Sijil
',
		'13070  -  מדינת החשמונאים  THE HASMONEAN STATE
',
		'13176  -  יהודי ירושלים במאות ט"זי"ט, ע"פ המקורות העבריים  Jerusalems Jews, 16th19th c., according to Hebrew sources
',
		'13213  -  ההיסטוריה הארוכה של יהודי ארצות האסלאם  The Long History of Mizrahi Jews
',
		'13265  -  חורבן ותקווה  על יהודים ורומאים בתקופה הפלאווית  Destruction and Hope  Jews and Romans in the Flavian period
',
		'13404  -  משפט וקהילה בקרב יהודי ארצות האסלאם בימי הביניים  Law and Community among Jews in the Medieval Islamic World
',
		'13865  -  Hasidism: Key Questions  Hasidism: Key Questions
',
		'13112  -  הדרכה ביבליוגרפית  BIBLIOGRAPHICAL GUIDANCE
',
		'17016  -  אבות ובנות בספרות העברית  Fathers and Daughters
',
		'17042  -  מבוא לספרות ישראלית  Introduction to Israeli Literature
',
		'17110  -  מבוא לספרות העממית: מסיפורי המקרא ועד לאגדות האורבניות  Introduction to FolkNarrative
',
		'17172  -  השירה העברית החדשה: היסטוריה, פואטיקה ותרבות  NEW MODERN HEBREW POETRY :HISTORY AND POETICS
',
		'17225  -  השירה העברית בספרד המוסלמית  Hebrew Poetry in Moslim Spain
',
		'17347  -  "מי אני ומה שמי?" טדרוס אבולעאפיה משורר עברי בספרד הנוצרית  H
',
		'17132  -  תור הזהב: מפתחות לשירת ספרד  A GOLDEN AGE: HEBREW VERSE IN AL ANDALUS
',
		'17182  -  הדרכה ביבליוגרפית  BIBLIOGRAPHICAL GUIDANCE
',
		'17608  -  "הסיפור תולדותיו וגלגוליו"  תרגיל  The Story History and Transformations  Tutorial
',
		'17833  -  מלפני בראשית: הבריאה ומה שקדם לה, ממקרא ועד פיוט  PREEXISTENCE IN EARLY JEWISH SOURCES
',
		'17902  -  שימו לב אל הנשמה: פיוט ולחן באשמורת הבוקר  TEXT AND MUSIC IN EARLY MORNING PIYYUT RITUALS
',
		'17905  -  הפואמות של טשרניחובסקי  Tchernichovsky poems
',
		'17995  -  שירת ביאליק  The Poetry of Hayyim Nachman Bialik
',
		'17234  -  אמנות הסיפור במדרשי האגדה  The art of storytelling in the Aggadic Midrashim
',
		'17343  -  "מישהו שומע אותי": הרומן הגראפי  Graphic Novels
',
		'17345  -  עלמה משוררת קולות נשיים בשירה עברית מוקדמת  FEMININE VOICES IN EARLY HEBREW VERSE
',
		'17419  -  הסיפור העברי הקדום: טוביה,יהודית ושושנה  Hebrew Novella: Tobit, Judith, Susanna
',
		'25201  -  דקדוק לשון חז"ל  Mishnaic Hebrew
',
		'25123  -  ניקוד  Vocalization (Niqqud)
',
		'25140  -  מבוא לארמית א: ארמית המקרא  Introduction to Aramaic Part 1: Biblical Aramaic
',
		'25145  -  לשון המקרא  Biblical Hebrew
',
		'25207  -  לשון תקופת הביניים  Medieval Hebrew
',
		'25307  -  תורת הצורות של העברית  Hebrew Morphology
',
		'25817  -  סמינריון מחלקתי: סוגיות נבחרות בחקר העברית  Dept. Seminar: Topics in Hebrew Lingustics
',
		'25859  -  עיונים בלשניים ופילולוגיים בארמית הבבלית  Babylonian Aramaic: Lingustic and Philology
',
		'25876  -  לשונו של עגנון  The Language of Agnon
',
		'25309  -  עיונים במילון לשון המקרא ולשון חז"ל  Lexicology of Biblical and Mishnaic Hebrew
',
		'25362  -  העברית המדוברת  דקדוק ומחוות  Spoken Hebrew: Grammar and Gesture
',
		'25420  -  נושאים בתחביר ובסמנטיקה  Topics in Syntax and Semantics
',
		'25514  -  העברית שבמגילות מדבר יהודה  The Hebrew of the Dead Sea Scrolls
',
		'25714  -  Targum PseudoJonathan: Language, Text and Midrash  פרופ קוק  Targum PseudoJonathan: Language, Text and Midrash  Prof. Kook
',
		'25815  -  ארמית מערבית חדשה  Western NeoAramaic
',
		'25870  -  סוגיות בפונטיקה  Topics in Phonetics
',
		'25121  -  הדרכה ביבליוגרפית  Bibliographical Guidance
',
		'25914  -  העצים והיער: סוגיות בעריכה מדעית  Issues in Scientific Editing
',
		'25990  -  עריכת תרגום  סדנה מתוקשבת  TRANSLATION EDITING
',
		'18114  -  תרבות יידיש  מבוא  The World of Yiddish
',
		'18106  -  יידיש למתחילים  ELEMENTARY YIDDISH
',
		'18705  -  יידיש: סקירת המחקר, מגמות וסוגיות מתודולוגיות  Yiddish:The State of the Field  Historiography and Methodology
',
		'18708  -  עולם הפוך: היסטוריה חדשה של תנועת ההשכלה במזרח אירופה  A TopsyTurvy World: A New History of The Eastern European Haskalah Movement
',
		'18117  -  בחינת פטור ביידיש למתקדמים  ADVANCED YIDDISH EXEMPTION EXAMINATION
',
		'14108  -  המקורות הקלאסיים של הפילוסופיה היהודית בימיהביניים  Classical sources of the Medieval Jewish Philosophy
',
		'14115  -  הרמב"ם, פועלו ויצירתו  Maimonides: his activity and thought
',
		'14138  -  המקורות המוסלמיים של הפילוסופיה היהודית  MUSLIM SOURCES OF JEWISH PHILOSOPHY
',
		'14301  -  אל, עולם, ואדם בפילוסופיה היהודית העכשווית  God, world, and Human Being in Contemporary Jewish Philosophy
',
		'14444  -  המקורות הפילוסופיים של המחשבה היהודית המודרנית  Jewish Philosophy in Modern Times
',
		'14628  -  קווי יסוד בפילוסופיה היהודית בימי הביניים  Major Trends in Medieval Jewish Philosophy
',
		'14100  -  קריאה בספר הזוהר למתחילים  ZOHAR READINGS FOR BEGINNERS
',
		'14211  -  קריאה בספר "מורה הנבוכים" לרמב"ם  READINGS IN MAIMONIDES GUIDE OF THE PERPLEXED
',
		'14252  -  קבלה בימי הביניים  Kabblah in the middle ages
',
		'14142  -  נפש האדם  בין מחשבת ישראל לפסיכולוגיה  The Human Soul  Between Jewish thought and Psychology
',
		'14150  -  המעמד והשיח של שאלות ותשובות בספרות חז"ל ובספרות ההודית הקדומה  QUESTIONS & ANSWERS IN THE TALMUD AND OLD INDIA
',
		'14109  -  בין אלכסנדריה לקיסריה: היהדות ההלניסטית בארץ ישראל  Hellenistic Judaism in Palaestina
',
		'14299  -  תיאוקרטיה ותבונה: פילוסופיה פוליטית יהודית בעת החדשה  Theocracy and Reason: Jewish Political Philosophy in the Modern Period
',
		'14736  -  לא בשמים היא  אך מי השולט בארץ? שאלת הסמכות בראי חז"ל  Conceptions of Authority in Rabbinic Literature
',
		'14763  -  סמינריון בהגות יהודית גרמנית  Graduate Seminar in GermanJewish Thought and Culture
',
		'14774  -  Monarchy in Classical Jewish Thought  Monarchy in Classical Jewish Thought
',
		'14776  -  גישות פילוסופיות בהגות היהודית ברנסנס  Philosophical trends in Renaissance Jewish thought
',
		'14778  -  הקבלה ומקובלים בא"י 15171260  Kabbalah in Palestine: 1260  1517
',
		'14780  -  קריאה בספר לשם שבו ואחלמה חלק ג  Reading Elyashivs Leshem 3
',
		'14787  -  תרגום וגאולה בהגותם של פ. רוזנצוויג ומ. בובר  Translation and Redemption in the Thought of F. Rosenzweig and M. Buber
',
		'14120  -  תורת הנפש בפילוסופיה היהודית בימה"ב  Psychology in Jewish Medieval thought
',
		'14139  -  הגותו של אבן גבירול ביצירתו הפילוסופית והפיוטית  IBN GABIROLS THOUGHT IN HIS PHILOSOPHICAL AND POETIC WRITINGS
',
		'14782  -  ספרות השו"ת והפילוסופיה של ההלכה  XXX
',
		'14785  -  The Philosophy of Modern Orthodox Judaism  The Philosophy of Modern Orthodox Judaism
',
		'14922  -  קריאה מודרכת  TUTORIAL READING
',
		'10821  -  פונולוגיה  Phonology
',
		'10824  -  סמנטיקה לקסיקאלית א  Lexical Semantics A
',
		'10802  -  תרגיל במבוא לבלשנות  INTRODUCTION TO LINGUISTICS  TUTORIAL
',
		'10840  -  Comparative Semitic Linguistics: Phonology and Morphology  Comparative Semitic Linguistics: Phonology and Morphology
',
		'10221  -  קריאת מקורות בתרבות ישראל  העת העתיקה  READING SOURCES IN JEWISH CULTURE  1
',
		'12112  -  הפולקלור היהודי בהקשרו ההיסטורי והתרבותי  JEWISH FOLKLORE IN HISTORICAL & CULT. CONTEXT
',
		'12115  -  סוגיות יסוד בחקר הסוגה (זאנר) העממית  Folklore and Folknarrative Genres: Introduction
',
		'12857  -  עבודת שדה בחקר פולקלור ותרבות עממית  Fieldwork in Folklore and Folk Culture Studies
',
		'12822  -  שמועות: היבטים זאנריים והיסטוריים  RUMOURS: FOLK GENRE PERSECTIVES AND HISTORICAL
',
		'12874  -  סיפור, מרחב וריטואל  Narratve, Space and Ritual: Sacred Spaced in Jewish Folklore
',
		'12876  -  טקסי ילדות ומאגיה באמנות ובפולקלור של קהילות ישראל  Rituals of Childhood and Magic in Jewish Art and Folklore
',
		'10515  -  יצירות מופת בספרות עולם  ב  MASTERPIECES OF WORLD LITERATURE  II
',
		'10610  -  תורות הספרות במאה ה20: סוגיות יסוד  20TH CENT. LITERATURES: BASIC TOPICS
',
		'10760  -  מסורת התרגום העברית  History of Translation into Hebrew
',
		'10521  -  כתיבה יוצרת סיפורת למתחילים  Prose Workshop, A
',
		'10531  -  כתיבה יוצרת  שירה למתחילים  Creative writing  Poetry ,A
',
		'10542  -  כתיבה מסאית  Articles and Essays
',
		'10556  -  קריאת טקסטים ביצירות מופת בספרות העולםב  READING IN MASTERPIECES OF WORLD LITERATURE  B
',
		'10665  -  קריאת טקסטים בביקורת הספרות והאסתטיקה: מאפלטון עד ניטשה  TOPICS IN POETICS AND AESTHETICS: TUTORIAL
',
		'10797  -  סדנה במו"לות מעשית  Workshop in practical publishing
',
		'38005  -  היסטוריה של רפואה במזה"ת  A history of medicine in the Middle East
',
		'38094  -  Intermediate Readings in Classical Armenian  Intermediate Readings in Classical Armenian
',
		'38134  -  האסלאם והמזרח התיכון המודרני  Islam and modern Middle East
',
		'38157  -  מבוא לאמנות ותרבות חומרית בארצות האסלאם  מראשית האסלאם עד נפילת בגדאד  INTRO. TO ISLAMIC ART & MATERIAL CULTURE  FROM THE BIRTH OF ISLAM TILL THE FALL OF BAGHDAD
',
		'38162  -  עיראק ואתגרי ההווה: היסטוריה של מדינה שנבנתה שלוש פעמים  Iraq and the Challenges of the Present: a History of a Country ThriceBuilt
',
		'38257  -  ציוויליזציות ותרבויות באיראן ובמרכז אסיה הקדם אסלאמית  CIVILIZATIONS AND CULTURES IN PREISLAMIC IRAN AND CENTRAL ASIA
',
		'38805  -  The Ottomans and the world around them  The Ottomans and the world around them
',
		'38513  -  גבריות, חברה ופוליטיקה באיראן  MASCULINITY, SOCIETY AND POLITICS IN IRAN
',
		'38829  -  מלחמת העולם הראשונה במזה"ת: היסטוריה חברתית ותרבותית  WWI in the Middle East: Soc.Cultural History
',
		'38838  -  התהוות הסיפור הקצר בספרות הפרסית המודרנית  Modern Persian Short Story
',
		'38931  -  יחסיה החשאיים של ישראל עם מדינות ערב ומיעוטים במזה"ת (1948 2020)  Israels secret relations with states and minorities in the Middle East, 19482020
',
		'38951  -  קריאה מודרכת בלימודי האסלאם והמזה"ת  TUTORIAL READING  ISLAMIC & MIDDLE EAST STUDIES
',
		'16051  -  ספרות ערבית מודרנית  קריאת טקסטים  Modern Arabic Literature: Text Readings
',
		'16096  -  דת האסלאם  אמונה ופולחן (חלק א)  Introduction to Islam: Belief and Ritual (Part I)
',
		'16103  -  יסודות הלשון הערבית  Basic Arabic Grammar
',
		'16127  -  זאנרים ספרותיים מודרניים  Modern literary genres
',
		'16136  -  פרוזה מודרנית  ב  Tests in Modern Arabic  2
',
		'16128  -  דקדוק ותחביר ב  Arabic Grammar and Syntax B
',
		'16306  -  שירה ערבית קלאסית  קריאת טקסטים  Classical Arabic Poetry: Text Readings
',
		'16350  -  מבוא לקוראן  An Introduction to the Quran
',
		'16703  -  החברה הערבית בישראל  ARAB SOCIETY IN ISRAEL
',
		'16817  -  קריאה בכתביו של מחיי אלדין אבן אלערבי (12401165)  Readings in the Works of Muhyi lDin Ibn alArabi (11651240)
',
		'16904  -  דיאלקטים במגע  מלטזית כמקרה בוחן  Dialect, Contact and Dialectology: Maltese as a Case Study
',
		'16318  -  נרטולוגיה בספרות הערבית המודרנית  Narratology in Modern Arabic Literature
',
		'16433  -  הפולמוס בין יהודים, מוסלמים ונוצרים בימיהביניים  Medieval interreligious polemic in Arabic
',
		'16446  -  Syyid Qutb: From Modern Literature to the Theory of Gods Sovereignty  Syyid Qutb: From Modern Literature to the Theory of Gods Sovereignty
',
		'16501  -  ספרות קלאסית יפה: קריאה בכתאב אלאגאני  Classical Arabic BellesLettres: Kitab alAghani
',
		'16802  -  מבוא לכתבי רב סעדיה גאון  Introduction to the writings of Saadya Gaon
',
		'16843  -  כתבייד פרשניים בערביתיהודית  Exegetical manuscripts in JudeoArabic
',
		'16861  -  לשון וחברה בעולם הערבי  Topics in Arabic Sociolinguistics
',
		'35145  -  מבוא לאינדונזיה: היסטוריה ותרבות  Introduction to Indonesia: history and culture
',
		'35575  -  מבוא להודו המוקדמת: מערש ההיסטוריה עד למאה ה17  Introduction to Early and Medieval South Asia
',
		'35622  -  The way to a mans heart  readings from Dandis Dasakumaracarita  The way to a mans heart  readings from Dandis Dasakumaracarita
',
		'46101  -  "להבין" את צפון קוריאה  Understanding North Korea
',
		'46103  -  סין הקיסרית המאוחרת  LATE IMPERIAL CHINA
',
		'46113  -  תולדות קוריאה המודרנית  INTRODUCTION TO MODERN KOREA
',
		'46115  -  פורום אסיה בזירה הבינלאומית פוליטיקה, כלכלה ומוסדות  Forum of Asia in International Arena Politics, Economy and Institutions
',
		'38023  -  טקסטים בערבית למתחילים  Arabic Texts for Beginners
',
		'38076  -  בחינת פטור בפרסית למתקדמים  EXEMPTION EXAM IN ADVANCED MODERN STANDARD PERSIAN
',
		'38083  -  ערבית למתקדמים  ADVANCED ARABIC
',
		'38086  -  קורס הדרכה אישית: טקסטואלי  Personal tutoring in Arabic texts
',
		'38101  -  ערבית למתחילים  ARABIC FOR BEGINNERS
',
		'38119  -  פלסטינים על יהדות, ציונות וכיבוש קריאת טקסטים  Palestinians on Zionism, Judaism and Occupation
',
		'38126  -  פרסית למתחילים  ELEMENTARY MODERN STANDARD PERSIAN
',
		'38188  -  קורס טקסטואלי מוגבר עבור תלמידי חבצלות  Intensive Standard Arabic HAVATZALOT third year
',
		'38215  -  קריאה בפתוות של יוסף אלקרצאוי  Reading in the legal opinions of Yusuf alQaradawi
',
		'38308  -  נושאים חברתייםתרבותיים בעיתונות פרסית  קריאת טקסטים  SocioCultural Themes in Persian Press  tutorial
',
		'38525  -  תורכית למתחילים  TURKISH FOR BEGINNERS
',
		'38819  -  ההיסטוריוגרפיה הערבית מהמדינה הממלוכית על סוגותיה קריאת טקסטים  Arabic Historiography from the Mamluk State  texts
',
		'38861  -  האימפריה העותמאנית: חברה, פוליטיקה ותרבותקורס טקסטואלי מתקדם בתורכית עותמאנית  The Ottoman Empire: Society, Politics and Culture
',
		'38093  -  Introduction to Classical Armenian language (grabar)  Introduction to Classical Armenian language (grabar)
',
		'38123  -  מבוא לתולדות העמים המוסלמים חלק א לתלמידי חבצלות  INTRO. TO THE HIST. OF THE MUSLIM PEOPLE PART I Havatzalot
',
		'38226  -  היש עולם ערבי? תרבות, הנצחה וסמלים בעולם הערבי  Is There an Arab World? Culture, Commemoration and Symbols in the Arab World
',
		'38272  -  מבוא לדת הזורואסטרית  INTRO. TO ZOROASTRIANISM
',
		'38454  -  מבוא לדת הבהאאית  INTRO. TO THE BAHAI FAITH
',
		'38145  -  מדינה, חברה ומשפחה במזרח התיכון  State, Society and Family in the Middle East
',
		'38222  -  מהפכנים ומלכים: מדינות ולאומיות במזרח התיכון של המאה ה20 וראשית המאה ה21  Kings and Revolutionaries: States and Nationalism in the Contemporary Middle East
',
		'38422  -  הפלסטינים: משלהי התקופה העותמאנית עד היום  The Palestinians: since late Ottoman era until present
',
		'38516  -  איראן בעת החדשה  modern Iran
',
		'38810  -  סוגיות באסלאם הקדום  Issues in Early Islamic History
',
		'38844  -  היסטוריה של ילדים וילדות במזרח התיכון  A History of Children and Childhood in the Middle East
',
		'38854  -  סמינר מחלקתי  SEMINAR FOR ADVANCED STUDENTS
',
		'38110  -  Going beyond the Boundaries: Female Practice Law in Contemporary Islam  Going beyond the Boundaries: Female Practice Law in Contemporary Islam
',
		'38153  -  תרבות איראן: מהכיבוש המונגולי עד התקופה הצפווית  Iranian Culture from the Mongols to the Safavids
',
		'38213  -  פרוטסטנטיות אסלאמית: פרויקט שלא נשלם  Islamic Protestanism: an Unfinished Project
',
		'38220  -  היסטוריה קולוניאלית של אלגיריה  A Colonial History of Algeria
',
		'38273  -  האימפריה הסאסאנית בראי התרבות החומרית  The Sasanian Empire in Light of its Material Culture
',
		'46127  -  קוריאה הפרהמודרנית: חברה ותרבות  Premodern Korea: Society and Culture
',
		'46132  -  חייליו של הקיסר: צבא, מלחמה ותשוקה ביפן ומזרח אסיה, 18391945  Soldiers of the Emperor: Army, War and Passion in Japan and East Asia
',
		'46143  -  מבוא לבודהיזם באסיה  Introduction to Buddhism in Asia
',
		'46410  -  סין בעידן המהפכות 1900  1978  China at the Age of Revolutions, 19001978
',
		'46529  -  פוליטיקה, חברה ומדיניות חוץ של יפן  JAPAN POLITICS, SOCIETY AND FOREIGN RELATIONS
',
		'46556  -  משני צדי המייצר: על היחסים המשתנים בין סין וטאיוואן  Across the Straits: on China and Taiwan Changing Relationships
',
		'46825  -  שיטות מחקר בהיסטוריה הסינית  RESEARCH METHODS IN CHINESE HISTORY
',
		'46908  -  מדיה וזיכרון במרחב האסייתי  Media and Memory in the Asian Sphere
',
		'46919  -  קריאה בהיסטוריוגרפיה של אסיה  Reading in the Historiography of Asia
',
		'35202  -  קריאת טקסטים בהינדי  ADVANCED GUIDED READING OF HINDI TEXTS
',
		'35530  -  סנסקריט למתקדמים  Advance Sanskrit
',
		'46116  -  סין: הדרכה מתודולוגית  CHINA: METHODOLOGICAL GUIDANCE
',
		'46307  -  טקסטים סיניים קלאסיים  CLASSICAL CHINESE TEXTS
',
		'46564  -  קוריאנית למתחיליםחלק א  KOREAN FOR BEGINNERSPART A
',
		'46807  -  קריאה מודרכת בטקסטים יפניים  ב  GUIDED READING OF JAPANESE TEXTS  B
',
		'46810  -  קריאה מודרכת בטקסטים סיניים  ב  GUIDED READING OF CHINESE TEXTS  B
',
		'35231  -  הינדי למתחילים  HINDI FOR BEGINNERS
',
		'46313  -  קוריאנית למתקדמים ב:חלק בקריאת טקסטים  Intermediate Korean 2  part 2Reading Korean Texts
',
		'46333  -  מיומנויות הקריאה והכתיבה בקוריאנית  ACADEMIC READING & WRITING SKILLS IN KOREAN LANGUAGE
',
		'46600  -  קוריאנית למתקדמים אחלק א  Intermediate Korean 1PART 1
',
		'35116  -  העיר הקולוניאלית והפוסטקולוניאלית בהודו  The colonial and postcolonial city in India
',
		'35524  -  האימפריה הבריטית בהודו ושקיעתה 19141950  The British Empire and its Decline in South Asia: 19141950
',
		'35816  -  Thinking about Meditation in Buddhism and Beyond  Thinking about Meditation in Buddhism and Beyond
',
		'35821  -  הבודהיזם בתחילת דרכו  The Early Days of Buddhism
',
		'35867  -  תרתי משמע: יצירת ריבוימשמעות בספרות יהודית והודית  Double Entendre: Plurality of Meaning in Jewish and South Asian Literature
',
		'46124  -  תכנית מצוינות: מגמות בחקר סין  Honors Program: Trends in China Research
',
		'46155  -  סמוראים במלחמה ושלום  The Japanese Warrior in War and Peace
',
		'46201  -  ספרות כראי להיסטוריה סינית  LITERATURE AS A MIRROR TO CHINESE HISTORY
',
		'46224  -  יחסי יפןדרום מזרח אסיה בתקופה המודרנית  JapanSoutheast Asian Relations in Modern Period
',
		'46411  -  תמורות בחיי החברה והמשפחה ביפן העכשווית  SOCIETY AND FAMILY IN CONTEMPORARY JAPAN
',
		'46804  -  סמינר מצטייניםמדור יפן  Honors Seminar in Japanese Studies
',
		'46849  -  Demographic Change and Care Migration in Asia: Welfare Regime, Mobility and Social Integration  Demographic Change and Care Migration in Asia: Welfare Regime, Mobility and Social Integration
',
		'46866  -  מהפכת הסמוראים של יפן: הרסטורציה של מייגי כהיסטוריה גלובלית  Japans Samurai Revolution: The Meiji Restoration as Global History
',
		'46915  -  מגעים, השפעות ומעבר ידע לרוחב היבשת האסיאנית  Contacts, interactions and the transfer of knowledge across the Asia Continent
',
		'46918  -  העבר בשירות ההווה ייצוגים ומניפולציות של ההיסטוריה בסין המודרנית  Use the Past to Serve the Present Representation
',
		'46950  -  Centers and Peripheries in Premodern Japanese Religious Culture  Centers and Peripheries in Premodern Japanese Religious Culture
',
		'15005  -  חשיבה ביקורתית  Critical Thinking
',
		'15034  -  פילוסופיה של הנפש  Introduction to Philosophy of Mind
',
		'15050  -  אתיקה ופילוסופיה פוליטית  Ethics and Political Philosophy
',
		'15104  -  מבוא לתולדות הפילוסופיה היוונית  Introduction to Greek Philosophy
',
		'15200  -  מבוא לאתיקה ופילוסופיה פוליטית  חלק ב  Introduction to Ethics & Political Philosophy  Part B
',
		'15244  -  סוגיות יסוד באסתטיקה  Basic Issues in Aesthetic
',
		'15302  -  מבוא לתורת ההכרה  Introduction to Epistemology
',
		'15431  -  תורת הקוונטים: יסודות ובעיות פילוסופיות  חלק א  Quantum Mechanics: Foundations and Philoso Phical Problem  Part I
',
		'15504  -  ליברזליזם ולאומיות  Liberalims and Nationalism
',
		'15535  -  השאלות הפילוסופיות של השואה  The Philosophical Implications of the Holocaust
',
		'15884  -  הנפש מהי?  What is the mind?
',
		'15929  -  לוגיקה מתקדמת: חלק א  Advanced Logic: Part I
',
		'15101  -  מבוא לתורת ההגיון  Introduction to Logic
',
		'15115  -  תרגיל  מבוא לתולדות הפילוסופיה היוונית  Tutorial  Introduction to Greek Philosophy
',
		'15256  -  הפילוסופיה הפרקטית של קאנט  Kants Practical Philosophy
',
		'15305  -  Humes Philosophy  Humes Philosophy
',
		'15525  -  אהבה רומנטית: גישה קירקגוריאנית  Romantic Love: A Kierkegaardian approach
',
		'15647  -  פילוסופיה וספרות  Philosophy and Literature
',
		'15768  -  Moral Epistemology  Moral Epistemology
',
		'15816  -  אידיאת העל חושי בשלוש הביקורות של קאנט  The Idea of Supersenseble in Three Kants Critiques
',
		'15903  -  פנומנולוגיה ומתמטיקה  Phenomenology and Mathematics
',
		'15059  -  Metaethics  Metaethics
',
		'15404  -  WellBeing  WellBeing
',
		'15408  -  פילוסופיה כטרפיה חלק ב  קירקגור  Philosophy as Therapy part 2  Kirekegaard
',
		'15528  -  גישות פילוסופיות לסבל  Philosophical approaches to suffering
',
		'15860  -  נטורליזם: משמעות, ידע, מוסר  Naturalism: Language, Knowledge, Morality
',
		'15021  -  קאנט (השלמות)  Kant (complementary course)
',
		'15809  -  סדנת מחקר לתלמידי מוסמך  Workshop for Graduate Students
',
		'24147  -  הברית החדשה וראשית הנצרות ב : עיון באגרות ובחזון יוחנן  NEW TESTAMENT AND EARLY CHRISTIANITY B
',
		'24202  -  מגמות בחקר השבתאות: טקסט וקונטקסט  The Study of the Sabbatian Movement: Texts and Contexts
',
		'24255  -  ממלכת אוזיריס: קריאה בספרות המתים (בתרגום)  The Realm of Osiris: Funerary Literature
',
		'24344  -  הברית החדשה וראשית הנצרות א: הבשורות ומעשי השליחים  NEW TESTAMENT AND EARLY CHRISTIANITY A: Gospels and Acts
',
		'24350  -  מבוא לדתות העולם: דתות אסיה  Introduction to Religions of the World: Asian Religions
',
		'24437  -  מסע בספינת השמש: המחשבה הדתית במצרים הפרעונית  Sailing on the Nile
',
		'24337  -  קריאת מקורות ב: הספרות הנוצרית בימי הביניים ובעת החדשה  Source Reading B: Medieval and Modern Christian Literature
',
		'24341  -  קריאת מקורות א : הספרות הנוצרית בשלהי העת העתיקה  Source Readings : Late Antique Christian Literature
',
		'24415  -  דת וחברה באינדונזיה  Religion and Society in Indonesia
',
		'24175  -  דרך האמצע בתורות היוגה והבודהיזם  Seminar
',
		'24200  -  הנצרות הסורית: מאפיינים יחודיים  Syriac Christianity: Distinctive Features
',
		'24511  -  דת ותרגום  Religion and Translation
',
		'24814  -  קריאה בכתבי יד סוריים עתיקים  Reading Ancient Syriac Manuscripts
',
		'24862  -  סמינר מתודולוגי: קטגוריות ניתוח במדע הדתות  Analytical Categories in the Study of Religion
',
		'24904  -  דימויי גן העדן בקוראן ובאסלאם  Images of Paradise in the Quran and in Islam
',
		'24954  -  דת, לאומיות וזכויות אדם  Religion, nationalism and human rights
',
		'6012  -  פרדוקסים ודילמות  Paradoxes and Dilemmas
',
		'6111  -  חישוב ומשמעות  Meaning and Computation
',
		'6134  -  הקוגניציה הכי גבוהה  מנגנוני שפה ואריתמטיקה במוח  The highest cognition: brain mechanisms for language and arithmetic
',
		'6821  -  הוכחות למציאות אלוהים  Arguments for the existence of God
',
		'6112  -  מבוא לחקר השפה  INTRODUCTION TO THE STUDY OF LANGUAGE
',
		'6116  -  שיטות אלגבריות למדעי הקוגניציה  ALGEBRA FOR COGNITIVE SCIENCE
',
		'6119  -  חישוביות וקוגניציה  COMPUTATION AND COGNITION
',
		'6125  -  נוירואנטומיה תפקודית למדעי הקוגניציה  FUNCTIONAL NEUROANATOMY FOR COGNITION SCIENCES
',
		'6132  -  שיטות מחקר בקוגניציה  RESEARCH METHODS IN COGNITION
',
		'6828  -  נוירופסיכיאטריה: הבסיס המוחי של תהליכים נפשיים  NEUROPSYCHIATRY: COGNITION OF MENTAL DISORDERS5
',
		'6832  -  סמינריון לתלמידי מ"א קוגניציה  GRADUATE SEMINAR
',
		'6839  -  קווי דמיון  סמינר רב תחומי בקוגניציה, מוח ואמנות  Fine Lines : An Interdisciplinary Seminar in Cognition, Brain and Art
',
		'6147  -  פרוייקט מחקר עצמאי במעבדה שנה ב  INDIVIDUAL RESEARCH PROJECT IN THE LAB.
',
		'6124  -  עבודה סמינריונית  SEMINAR PAPER
',
		'22157  -  המלך תות ענח אמון  King Tutankhamun
',
		'42102  -  מבוא לאכדית  Introduction to Akkadian
',
		'42315  -  עיונים בחוקי חמורבי  Reading in the Laws of Hammurapi
',
		'42653  -  מלכים וערים: מבוא להיסטוריה של מסופוטמיה הקדומה  Kings & Cities: Introduction to the History of Ancient Mesopotamia
',
		'43108  -  מבוא לארכאולוגיה מוסלמית בארץישראל  INTRO. TO ISLAMIC ARCHAEOLOGY IN LAND OF ISRAEL
',
		'43116  -  שיטות ממדעי הטבע בארכאולוגיה  מבוא  Natural sciences in Archaelogy  Introduction
',
		'43310  -  המהפכה שלא הצליחה: התקופה הכלקוליתית בארץ ישראל  Unsuccessful revolution: The Chalcolithic period
',
		'43414  -  מבוא לארכאולוגיה של א"י והמזרח הקדום (ג): תקופת הברזל  INTRO. ARCH.OF ISRAEL AND THE LEVANT: IRON AGE
',
		'43483  -  בין מלכים ואלים (ב): מבוא לאמנות מסופוטמית באלף השני לפנה"ס  Between kings & gods: 2nd Millennium BCE Mesopotamian art
',
		'43489  -  "הופעת החקלאות"  תאוריות ומידע  BEGINNINGS OF AGRICULTURE
',
		'43511  -  מבוא לארכאולוגיה של א"י בתקופה ההלניסטית, הרומית והביזנטית  INTRO. TO HELLEN.ROMAN. ARCH. OF LAND OF ISRAEL
',
		'43530  -  ארכיאולוגיה ניסויית  Experimental Archaeology
',
		'43534  -  ארכיטקטורה קדומה  Ancient Architecture
',
		'43548  -  התפתחות חברות מורכבות  BEGINNINGS OF CIVILIZATION
',
		'43579  -  מבוא לאמנות מסופוטמית משלהי האלף ה4 עד סוף ה3 לפנה"ס  Mesopotamian art from late 4th to the end of the 3rd millennia
',
		'43615  -  התפתחות המרחבים התחומים בפרהיסטוריה  עד הבית הנאוליתי  DEVELOPMENTS OF PREHISTORIC CLOSED SPACES
',
		'43628  -  מפומפיי לאוסטיה: חיי היומיום בעיר הרומית  Daily Life in Pompei, Hercaulaneum and Ost
',
		'43757  -  טכנולוגיה של כלי חרס  Technological Workshp: Ceramics
',
		'43793  -  ייצוגי השליט באומנות המזרח הקדום  Pictorial Representations of Sovereigns in the ancient Near East
',
		'43838  -  היבטים ארכאולוגיים של חברות ציידים לקטים  Archaeological perspectives on huntergatherers
',
		'43977  -  קבורה וזהות חברתית ודתית בארץ ישראל: פגאנים, יהודים, נוצרים ומוסלמים  Burial and social  religious identity
',
		'36103  -  סורית  לשון וטקסטים (למתחילים)  SYRIAC: LANGUAGE AND TEXTS (BEGINNERS)
',
		'42459  -  אני אריה רבכוח! כתובות מלכים מן המזרח הקדום  Royal Inscriptions from the Ancient Near East
',
		'42509  -  מסע בזמן: הכרונולוגיה של המזרח הקרוב הקדום  Chronology of the Ancient Near East  A Journey in time
',
		'43321  -  מבוא לארכאומטלורגיה  INTRODUCTION TO ARCHAEOMETALLURGY
',
		'43513  -  כלי צור (א)  FLINT TOOLS (A)
',
		'43806  -  סוגיות באדריכלות ובניה בא"י בתקופה האסלאמית וב"ימי הביניים"  Issues in Architecture and Construction Methods during the Islamic "Medieval" Periods
',
		'43201  -  מבוא לארכאולוגיה מרחבית  INTRO. TO SPATIAL ARCHAEOLOGY
',
		'43306  -  הרביעון: פליאולית עליון ואפיפליאולית  QUATERNARY: UPPER PALAEO. AND EPIPALAEOLITHIC
',
		'43491  -  מבוא כללי לארכאולוגיה  Introduction to Archaeology
',
		'43621  -  יישומי ממ"ג (GIS) לארכאולוגיה  GIS Applications in Archaeology
',
		'43822  -  ניתוח סטרטיגרפי  STRATIGRAPHICAL ANALYSIS
',
		'42656  -  מכתבים נבחרים מבבל העתיקה  Selected Old Babylonian Letters
',
		'42771  -  אליהודו  סמינריון חוקרים  AlYahudu, The Research Seminar
',
		'43504  -  פרקים בארכאולוגיה פרהיסטורית  TOPICS IN PREHISTORY
',
		'43526  -  פרקים בארכ קלאסית: מאלכסנדר מוקדון לאלכסנדר ינאי: א"י בתק ההלניסטית  From Alexander the Great to Alexander Janneus: The Archaeology of Hellenistic Palestine
',
		'43762  -  בעיות בארכאולוגיה פרהיסטורית  Problems in Preistory Archaeology
',
		'22145  -  האימפריה המצרית בכנען  Egyptian Empire in Canaan
',
		'22428  -  האמן במצרים העתיקה: מהלך חיים, שיטות עבודה, דגמי לימוד, טכניקות  Ancient Egyptian Artists: Life, Work, Models, Techniques
',
		'22713  -  כתובות מצריות עתיקות מאתרים בארץ ישראל  Egypt in Israel: Ancient Egyptian Inscriptions Found in Israel
',
		'42100  -  קריאה מודרכת לתלמידי הבוגר  READING TUTORIAL FOR B.A. STUDENTS
',
		'43111  -  חפירה לימודית  STUDY EXCAVATION
',
		'43157  -  מבוא לארכאולוגיה יוונית  INTRODUCTION TO GREEK ARCHAEOLOGY
',
		'43211  -  מבוא לארכאולוגיה של א"י באלף השלישיהשני לפנה"ס (ב)  INTRO. ARCH.OF ISRAEL AND THE LEVANT: 3RD2ND MIL. BC (B)
',
		'39140  -  מבוא לימיהביניים  Introduction to the Middle Ages
',
		'39204  -  אירופה בעת החדשה המוקדמת  EUROPE IN THE EARLY MODERN ERA
',
		'39215  -  מבוא להיסטוריה של המאה העשרים  Introduction to 20th Century History
',
		'39274  -  רומא: מרפובליקה לקיסרות  ROME: FROM REPUBLIC TO EMPIRE
',
		'39421  -  מניוטון לפרויד: היסטוריה אינטלקטואלית של המדע המערבי: חלק ב  From Newton to Freud: an Intellectual History of Western Science: part B
',
		'39025  -  התנועה לזכויות האזרח בארה"ב  The Civil Rights Movement
',
		'39044  -  מיעוטים וקבוצות שוליים בגרמניה , 15001800  Subordinated Groups in Early Modern Germany
',
		'39053  -  הרפורמציה הפרוטסטנטית כמהפכה דתית, חברתית ותרבותית  THE PROTESTANT REFORMATION
',
		'39083  -  הקיסר יוסטיניאנוס  Emperor Justinian
',
		'39113  -  כסף, חוב וסיכון כלכלה וחברה בעת החדשה  Money, Debt and Risk Economy and Society in the Modern Era
',
		'39123  -  הדמוקרטיה האתונאית במאה ה5  THE ATHENIAN DEMOCRACY IN THE 5TH CENTURY
',
		'39146  -  אבירי השולחן העגול: ספרות והיסטוריה  Knights of the round table: Literature and History
',
		'39171  -  בין רומא לקונסטנטינופול  דת במזרחאירופה במאות ה10  17  RELIGI. IN EASTERN EUROPE IN 10TH 17THCENTURIES
',
		'39211  -  ימי הבינייםהיסטוריה תרבותית של הים התיכון בימי הביניים  The cultural history of the Mediterranean World in the the Middle Ages
',
		'39237  -  מדיניות, חברה ותרבות במונרכיה ההבסבורגית (19181848)  Politics, Society and Culture in the Habsburg Monarchy (18481918)
',
		'39064  -  הבראיזם נוצרי באירופה בימה"ב ובראשית העת החדשה  CHRIS.HEBRAISM IN MEDIEVAL & EARLY MODERN EUROPE
',
		'39141  -  גבריות חדשה, נשיות חדשה, ומה שביניהן: היסטוריה מינית של אירופה במאה העשרים  European Gender, Sexuality, and the Borders of Tolerance, 19142020
',
		'39164  -  החברה במאה ה11 באימפריה הרומית המזרחית: זרים, נשים וקבוצות אחרות  Society in the 11th century Eastern Roman Empire: foreigners, women and other groups
',
		'39172  -  חפצים בימיהביניים: היסטוריה חומרית  Medieval Objects: A Material History
',
		'39188  -  מדיניות החוץ של ארצות הברית (מאז 1776)  U.S. Foreign Policy (since 1776)
',
		'39194  -  באדולינו: בעקבות אומברטו אקו  Badolino: Umberto Eco and the middle Ages
',
		'39200  -  על צמחים ואנשים: היסטוריות משולבות  On Plants and People: Entangled Histories
',
		'39220  -  Intelligence, Espionage and Covert Action: History and Theory  Intelligence, Espionage and Covert Action: History and Theory
',
		'39232  -  העיר הימי ביניימית  מרחבים, מיתוסים, היסטוריוגרפיה וכלי ניתוח חדשניים  The Medieval City Space, Myth, Historiography and Novel Analysis Methods
',
		'39249  -  פושעים, זונות וזמרים נודדים במזרחאירופה עד המאה ה18  Criminals, Whores, and Minstrels in Eastern Europe Until the 18th Century
',
		'39457  -  אוכל בימיהביניים ובעת החדשה המוקדמת  Food in the Medieval and Early Modern Period
',
		'39819  -  כיוונים חדשים בהיסטוריה סביבתית קדםמודרנית  New Directions in Premodern Environmental History
',
		'39823  -  היסטוריה ופילוסופיה של המדע בעולם הביזנטי  History and Philosophy of Science in the Byzantine World (330CE 1453CE)
',
		'39838  -  הדרכה אישית למוסמך  PERSONAL TUTORING FOR M.A. STUDENTS
',
		'39841  -  היסטוריה של המיניות באירופה המודרנית  History of sexuality in modern Europe
',
		'39856  -  "פרויקט הפיצויים": תיקונים לעוולות היסטוריים באירופה אחרי 1945  The Compensation Project: Reparations for Historical Wrongs in Europe after 1945
',
		'39875  -  שיטוט בספרייתו של שארל החמישי  A visit in Charles Vs library
',
		'39895  -  הדרכה אישית למוסמך  PERSONAL TUTORING FOR M.A. STUDENTS
',
		'39924  -  תקשורת במלחמת האזרחים האמריקנית  Communications in the American Civil War
',
		'39947  -  אתרי זיכרון ומונומנטים של העתהעתיקה בין מדע, אוריינטליזם ורסטיטוציה  Ancient Monuments and Places of Memory  Between Science, Orientalism, Translocation and Restitution
',
		'39811  -  "היה היה"  once upon a time
',
		'29121  -  אמריקה הלטינית בתקופה הקולוניאלית  Latin America in Colonial Times
',
		'29150  -  מסרוונטס ועד אלמודובר  מסע אל הספרות והתרבות הספרדית  From Cervantes to Almodovar  A Journey into Spanish Literature and Culture
',
		'29204  -  תולדות קטלוניה בימינו:שאיפות לאומיות באמצעות אומנות  Contemporary History of Catalonia: National aspirations trough arts
',
		'29147  -  מבוא לאמריקה הלטינית המודרנית, מהעצמאות עד היום  Introduction to Modern Latin America since Independence
',
		'29815  -  סמינריון מחקרי למורים ולתלמידים  שנה א  RESEARCH SEM. FOR TEACHERS & STUDENTS  1ST YEAR
',
		'29911  -  סקס, סמים ורוקאנדרול במעבר הספרדי (19731986)  Sex, drugs and rock and roll (in the Spanish transition (19731986
',
		'29970  -  צבא ופוליטיקה באמריקה הלטינית  The Army and Politics in Latin America
',
		'29974  -  ספרד בעת החדשה המוקדמת: היסטוריה חברתית ותרבותית  Early Modern Spain: Social and Culutral History
',
		'29976  -  זכויות אדם, צדק מעברי וזיכרון בארגנטינה  Human rights, transitional justice and memory in Argentina
',
		'29978  -  לכתוב היסטוריה בספרד בימי הביניים  Writing History in Medieval Spain
',
		'29098  -  האתגרים העכשוויים של אמריקה הלטינית  Latin American Contemporary Challenges
',
		'29164  -  יחסי אמריקה הלטיניתארה"ב במאה ה19 הארוכה  USLatin American Relations in the long 19th century
',
		'29302  -  הספרדית המודרנית בראי הטקסטים  Modern Spanish through texts
',
		'29624  -  נפלאות הסיפורת באמל"ט במאות ה 20  Latin American Narrative (20th centuries)
',
		'29971  -  דון קיחוטה בראי הספרות הלטינו אמריקאית II  Don Quixote in Latin II American Literature
',
		'29005  -  קטלאנית למתחילים  CATALAN FOR BEGINNERS
',
		'26157  -  ספרות רוסית וקולנוע  Russian Literature and Film
',
		'26114  -  הקיסרות הרוסית מפיוטר הגדול עד יקטרינה ה 2  RUSSIAN EMPIRE  FROMPETER THE GREAT TO CATHERINE II
',
		'26120  -  מבוא לשירה הרוסית  Introduction to Russian Poetry
',
		'26623  -  קריאת מקורות בתרבות רוסית  READING IN RUSSIAN CULTURE
',
		'26840  -  בין ספרות לאומנות בתרבות הרוסית  Literature and Art in Russian Culture
',
		'26200  -  שיטות ואמצעים הניתוח של טקסט ספרותי  Methods of critical analysis of literary texts
',
		'26202  -  ספרות הגולים הרוסיים בין מלחמות העולם  Russian Literature in Exile (19191940)
',
		'26326  -  אלכסנדר פושקין ותקופת הרומנטיזם  Alexander Pushkin and the Epoque of Romanticism
',
		'26090  -  פולנית למתחילים  POLISH FOR BEGINNERS
',
		'32215  -  ספרות גרמנית במאה ה19 וה 20  GERMAN LITERATURE  19TH and 20th centuries
',
		'32010  -  הרייך השלישי: בין אוטופיה לשואה  The third Reich between Utopia and Catastrophe
',
		'32125  -  מודרניזם, אקספרסיוניזם ודאדא  Mdernism, Expressionism and Dada
',
		'32132  -  התאטרון הגרמני בןזמננו: קריאה, תרגול, הצגה  Contemporary German theater  read, rehearse and perform
',
		'32134  -  שאלת הכח, מאונגארד לפרופגנדה: קולנוע ופוליטיקה ברפובליקת וימאר  The cinematic image from Avantgarde to Propaganda: Film and Politics in the Weimar Era
',
		'32514  -  אומני החשד: פרויד ניטשה מרקס  The Masters of suspicious: Nietzsche, Freud, Marx
',
		'32812  -  סוף האהבה? תשוקה ומניות בעידן המודרני  The End of Love? Desire and Sex in the Modern Age_
',
		'32840  -  חדש ישן, ישן חדש: אירופה ואמריקה בהגותם של גולים גרמנים בארה״ב  World Lost, World Regained: German Intellectuals in America
',
		'32870  -  מאה שנים לפאול צלאן  One hundred years of Paul Celan
',
		'32872  -  המחשבה האיזוטרית במאה העשרים: רודולף שטיינר, מרטין בובר, ואחרים  Esoteric thinking in the 20th century: Rudolf Steiner, Martin Buber, and others
',
		'27033  -  היסטוריה של הקולוניאליזם המודרני  History of Modern Colonialism
',
		'27061  -  עולם ומלחמה  היסטוריה צבאית מהמהפכה הצרפתית ועד דאע"ש  War in the World: Military History
',
		'27039  -  כתיבה מדעית באנגלית (לתלמידי תוכנית המצטיינים של המכון להיסטוריה)  ENGLISH: ADVANCED COMPOSITION
',
		'27031  -  טקסטים היסטוריוגרפיים  ניתוח יצירות מופת היסטוריות  HISTORIOGRAPHIC TEXTS  GREAT HISTORIC BOOKS
',
		'27227  -  מבט מהארכיון על גבולות, ריבונות ולאומיות  Archival Explorations of Israeli History
',
		'28107  -  יוונית למתקדמים (חלק א)  Advanced Greek (Part 1)
',
		'28218  -  מבוא לתרבות הקלאסית: יוון  Introduction to Classical Civilization: Greece
',
		'28309  -  הומרוס  Reading Homer
',
		'28203  -  מכינה ברומית  Elementary Latin
',
		'28222  -  רומית למתקדמים (חלק א)  Advanced Latin (Part 1)
',
		'28224  -  פרוזה יוונית קלה: ליזיאס  Lysias: Readings in Easy Greek Prose
',
		'28250  -  סנקה: כתבים פילוסופיים  Seneca: Philosophical Writings
',
		'28456  -  ורגיליוס: מבחר אקולוגות וגאורגיקה  Vergil: Selection from the Eclogues and the Georgics
',
		'28815  -  העיר רומא בספרות הלטינית  The City of Rome in Latin Literature
',
		'28869  -  שירה לירית יוונית  GREEK LYRIC POETRY
',
		'28888  -  גוף ונפש ביוון ורומא  Body and Soul in Ancient Greece and Rome
',
		'28403  -  Digital Ancient Science  Digital Ancient Science
',
		'28206  -  בחנים בחומר לקריאה עצמית: רומית ויוונית  Exams in Independent Reading: Greek & Latin
',
		'28257  -  בחנים בחומר לקריאה עצמית  רומית  Exams in Independent Reading: Latin
',
		'28202  -  בחינת פטור בשפה הרומית ברמת מתחילים  Exemption Examination in Latin (Elementary)
',
		'28512  -  עבודה סמינריונית (1)  Seminar Paper (1)
',
		'44161  -  ספרות אנגלית: ימי ביניים והרנסנס  English Literature: Middle Ages and Renaissance
',
		'44310  -  הספרות האנגלית בעידן ההשכלה והתקופה הרומנטית והויקטוריאנית  English Lit. of the 18th and 19th Centuries
',
		'44357  -  ספרות ותרבות אמריקנית  American Literature and Culture
',
		'44155  -  מבוא לשירה (החוג לאנגלית)  Introduction to Poetry
',
		'44133  -  ספרות מדע בדיוני קלאסי  CLASSIC SCIENCE FICTION
',
		'44136  -  נרטיבים של המרה  CONVERSION NARRATIVES
',
		'44140  -  פואטיקה של אמונה  THE POETICS OF BELIEF
',
		'44180  -  נבלים בספרות האנגלית  Villains in English Literature
',
		'44324  -  הרומן האנגלי והאמריקני במאה ה19  The English and the American novel  19th century
',
		'44580  -  פואטיקה אמריקאית ומצבי קצה פוליטיים: מהרנסאנס של הארלם לאסון התאומים  AMERICAN POETRY AND POLITICAL EXTREMITY: FROM THE HARLEM RENAISSANCE TO 9/11
',
		'44740  -  תרבות/ תדמית  IMAGE/ CULTURE
',
		'44747  -  פופ, סוויפט וגונסון  POPE, SWIFT AND JOHNSON
',
		'44851  -  ת. ס. אליוט: ״ארבעה קוורטטים״  T.S. ELIOT: FOUR QUARTETS
',
		'44256  -  עקרונות האנגלית הפורמלית א  Principles of Formal English 1
',
		'44309  -  עקרונות האנגלית הפורמלית מתקדמים  Principles of Formal English  Advanced
',
		'9172  -  שפה ותאטרון  LANGUAGE AND THEATER
',
		'45157  -  מבוא לספרויות רומאניות  Introduction to Romance Literature
',
		'45159  -  ספרות בהיסטוריה בצרפת 19352000  Literature in French History
',
		'45370  -  תוצרת איטליה Made in italy  Made in Italy
',
		'45374  -  לעוף גבוה  Volare Alto
',
		'45108  -  הסיפור  תולדותיו וגילגוליו  תרגיל  THE STORY  HISTORY AND TRANSFORMATIONS  TUTORIAL
',
		'45229  -  ה"שנסון" הצרפתי: מסע בתרבות צרפת  The French Chanson: A Journey in French Culture
',
		'45231  -  המשבר של הנרטיב  The Crisis of the Narrative
',
		'45234  -  יצירותיו של זורז פארק  George Perecs Works
',
		'45837  -  Gratian, Machiavelli and Schopenhauer  Gratian, Machiavelli and Schopenhauer
',
		'45235  -  בגידת התרגום ספרות, דת ותרבות  The translations betrayal: Literature, Religion and Culture
',
		'19174  -  על הקומי ועל הטראגי  On the Comic and the Tragic
',
		'19196  -  "הסיפור תולדותיו וגלגוליו"  תרגיל  The Story History and Transformations  Tutorial
',
		'19182  -  המקרא בראי הספרות המודרנית  THE BIBLE IN MODERN LITERATURE
',
		'19227  -  אמפתיה, הזדהות, חמלה  Empathy, Identification, and Compassion in Western Literature
',
		'19306  -  הקומדיה: עולם, עלילה ודמויות  COMEDY: WORKS, PLOT AND CHARACTERS
',
		'19427  -  אהבה בספרות ובפילוסופיה  Love: Philosophical and Literary Perspectives
',
		'19807  -  הביוגרפיות של יוסף ומשה: ספרות, מקרא, פסיכואנליזה  The Biographies of Joseph and Moses: Literature, Bible, Psychoanalysis
',
		'19814  -  סוגיות מתקדמות בספרות השוואתית  Advanced Topics in Comparative Literature
',
		'19884  -  זאנר חדש נולד: סיפורים בשש מלים  A Genres Birth: Six Word Stories
',
		'19895  -  עיון השוואתי בספרות קונטמפורנית  Comparative Approaches to Contemporary Literature
',
		'19512  -  ספרות רדופה: רוח הרפאים בספרות וכספרות  GHOSTWRITING: THE GHOST IN AND AS LITERATURE
',
		'19950  -  הדרכה אישית בלימודי ספרות  TUTORIAL IN LITERARY STUDIES
',
		'36610  -  תחביר  Syntax
',
		'36638  -  שפה וקוגניציה: מבוא לסוגיות פסיכובלשניות של רכישה ועיבוד שפה  Language and Cognition: Introduction to Issues in Language Acquisition and Processing
',
		'36613  -  מבנה ומשמעות  Structure and Meaning
',
		'41107  -  מבוא לחקר שיח דבור  Introduction to the analysis of spoken discourse
',
		'41208  -  ניתוח תחבירי  Syntactic analysis
',
		'41253  -  יסודות המבנה של הערבית המצרית  א+ב  Introduction to the structure of Egyptian Arabic  A+B
',
		'41595  -  מורפולוגיה הודואירופית  INDOEUROPEAN MORPHOLOGY
',
		'41853  -  מבוא לשיטות מחקר כמותניות בבלשנות  ב  Introduction to quantitative methods in linguistics B
',
		'36631  -  עבודה סמינריונית II  SEMINAR PAPER II
',
		'36811  -  סמינריון מחלקתי לתלמידי תואר שני שנה ב  DEPARTMENTAL SEMINAR  SECOND YEAR Graduate STUDENTS
',
		'36870  -  פסיכוסמנטיקה  Psychosemantics
',
		'36908  -  תחביר וסמנטיקה של נקודת ראות  The Grammar of Perspective
',
		'41112  -  מערכות ממיינים בלשונות ובכתבים  Classifier systems in languages and scripts
',
		'41809  -  סמינריון מחלקתי לתלמידי מוסמך שנה ב  Departmental Seminar  Second year graduate students
',
		'41838  -  ניתוח השיחה  The Analysis of Conversation
',
		'41872  -  סדנת מחקר לתלמידים מתקדמים  Research tutorial for advanced students
',
		'36641  -  ריבוי וממשק סמנטיקהפרגמטיקה  Plurals and the SemanticsPragmatics interface
',
		'36907  -  דפוסי לקסיקליזציה  Lexicalization Patterns
',
		'41019  -  שפה בהקשר חברתי: שפות סימנים בקהילות חרשים  Sign Languages in Deaf communities: Language in its Social Context
',
		'41115  -  שיטות מחקר כמותניות  Quantitative methods in linguistics
',
		'41344  -  עיונים בדקדוק הגעז (אתיופית עתיקה)  Advanced investigations in Geez (Ancient Ethiopic)
',
		'41582  -  עיונים בדקדוק הוולשית המודרנית  TOPICS IN MODERN WELSH GRAMMAR
',
		'41685  -  הדיאכרוניה של הספרדית  Spanish through its Diachrony
',
		'36621  -  הדרכה אישית  TUTORIAL
',
		'41190  -  הדרכה אישית לתלמידי בוגר (שנתי)  Individual guided research for BA
',
		'41799  -  הדרכה אישית למוסמך  Individual guided research for MA
',
		'36996  -  עבודה סמינריונית לתואר מוסמך (בלשנות גנרטיבית)  Seminar Paper for M.A. students  Generative Linguistics
',
		'41062  -  עבודה סמינריונית (2)  SEMINAR PAPER (2)
',
		'41998  -  עבודה סמינריונית לתואר מוסמך  SEMINAR PAPER FOR M.A. STUDIES
',
		'31000  -  איטלקית: מתחילים א  Italian: Beginners 1
',
		'31002  -  איטלקית: מתקדמים א  Italian: Advanced 1
',
		'31004  -  איטלקית: מיומנויות אקדמיות א  Italian: Academic Skills 1
',
		'31021  -  ספרדית: מתחילים ב  Spanish: Beginners 2
',
		'31023  -  ספרדית: מתקדמים ב  Spanish: Advanced 2
',
		'31025  -  ספרדית: מיומנויות אקדמיות ב  Spanish: Academic Skills 2
',
		'31027  -  ספרדית: מתחילים ב (אבני פינה)  Spanish: Beginners 2 (Cornerstone)
',
		'31041  -  צרפתית: מתחילים ב  French: Beginners 2
',
		'31043  -  צרפתית: מתקדמים ב  French: Advanced 2
',
		'31045  -  צרפתית: מיומנויות אקדמיות ב  French: Academic Skills 2
',
		'31061  -  גרמנית: מתחילים ב  German: Beginners 2
',
		'31063  -  גרמנית: מתקדמים ב  German: Advanced 2
',
		'31065  -  גרמנית: מיומנויות אקדמיות ב  German: Academic Skills 2
',
		'31067  -  גרמנית: מתחילים ב (אבני פינה)  German: Beginners 2 (Cornerstone)
',
		'31081  -  רוסית: מתחילים ב  Russian: Beginners 2
',
		'31101  -  יפנית: מתחילים ב  Japanese: Beginners 2
',
		'31103  -  יפנית: רמת ביניים ב  Japanese: Intermediate 2
',
		'31106  -  יפנית: מיומנויות אקדמיות ב  Japanese: Academic Skills 2
',
		'31120  -  סינית: מתחילים א  Chinese: Beginners 1
',
		'31122  -  סינית: רמת הביניים  Chinese: Intermediate
',
		'31124  -  סינית: מיומנויות אקדמיות א  Chinese: Academic Skills 1
',
		'31126  -  סינית: מיומנויות אקדמיות ב  Chinese: Academic Skills 2
',
		'31140  -  ערבית בערבית: מתחילים א  Arabic in Arabic: Beginners 1
',
		'31142  -  ערבית בערבית: מתקדמים א  Arabic in Arabic: Advanced 1
',
		'31150  -  ערבית מדוברת לתלמידי רפואה  Spoken Arabic For Medical Students
',
		'31011  -  איטלקית: רמה C1  Italian: C1
',
		'31018  -  איטלקית: רמה A2  Italian: A2
',
		'31030  -  ספרדית : רמה B2  Spanish: B2
',
		'31037  -  ספרדית: רמה A1  Spanish: A1
',
		'31039  -  ספרדית: רמה B1  Spanish: B1
',
		'31051  -  צרפתית : רמה C1  French: C1
',
		'31058  -  צרפתית: רמה A2  French: A2
',
		'31070  -  גרמנית : רמה B2  German: B2
',
		'31077  -  גרמנית: רמה A1  German: A1
',
		'31079  -  גרמנית: רמה B1  German: B1
',
		'31098  -  רוסית: רמה A2  Russian: A2
',
		'31117  -  יפנית: רמה A1  Japanese: A1
',
		'31119  -  יפנית: רמה B1  Japanese: B1
',
		'31131  -  סינית : HSKK מתקדמים  Chinese: HSKK Advanced
',
		'31136  -  סינית: HSK 3  Chinese: HSK 3
',
		'31138  -  סינית: HSKK מתחילים  Chinese: HSKK Beginner
',
		'30124  -  אמנות כערך וערך האמנות  Art as value and the value of art
',
		'30117  -  אמנות כאן ועכשיו  החוויה האמנותית ב  The Arts Here and Now II
',
		'5219  -  מקורות נוצריים לאמנות  LITERARY SOURCES OF CHRISTIAN ART
',
		'5317  -  אמנות מודרנית ועכשווית ב: מראשית המאה ה 20 ועד ימינו  Introduction to Modern and Contemporary Art: From Modernism to Modernity
',
		'5428  -  ארכיטקטורה של בתי כנסת  Architecture of Synagogues
',
		'5835  -  מוזיאולוגיה  ב  MUSEOLOGY PART II
',
		'5808  -  השפה החזותית: מבט חוצה גבולות  The Visual Language
',
		'5848  -  תהפוכות הדיסיפלינה: מגמות משתנות בראי ההיסטוריוגרפיה  The History of Art History: Historiography and Methodologies
',
		'5870  -  סמינריון חוגי בתולדות האמנות  RESEARCH SEMINAR OF ART HISTORY
',
		'5891  -  קריאה מודרכת  GUIDED READING
',
		'5323  -  אמנות יהודית  א  מסעות בזמן ובמרחב  Jewish Art I
',
		'5344  -  אמנות ארץ ישראל  ב  מגרה, מבקרת, מאתגרת: אמנות מקומית עכשיו  Exciting and Challenging: Local Art NOW
',
		'5380  -  אמנות מוסלמית בהודו  Islamic Art in India
',
		'5384  -  גורגונה (1477/781510): האמן החידתי  GIORGIONE (1477/781510): THE ENIGMATIC ARTIST
',
		'5394  -  טיציאן: הצייר הגאה  TITIAN: THE PROUD PAINTER
',
		'5411  -  אמנות צלבנית  Crusader Art
',
		'5515  -  פריז: בירת המאה ה19  Paris: Capital of the 19th Century
',
		'5960  -  פרפורמנס  אמנות נגד החיים  Art Against Life: Ideas in Performance Art
',
		'5962  -  מנייריזם  Mannerism
',
		'5964  -  סוגיות באמנות המזרח התיכון בשלהי העת העתיקה  The Art of the Middle East in Late Antiquity
',
		'5100  -  הדרכה  מבוא לאמנות מודרנית ותרבות חזותית: מהמהפכה הצרפתית ועד ימינו  TUTORING  Modern Art and Visual Culture: From the French Revolution to the 21st Century
',
		'5310  -  אמנות עתיקה א: הייצוג התמוני במזרח התיכון הקדום (3000300 לפני הספירה בקירוב)  Pictorial representation in ancient Near Eastern Art in the preclassical periods (circa 3500500 B
',
		'5312  -  מבוא לאמנות ימיהביניים א: האמנות באגן הים התיכון, מאות 74  Art in the Mediterranean Basin, 4th7th Centuries
',
		'5314  -  אמנות רנסנס א: חברה בראי האמנות באירופה 15001300  European Society 13001500 in the Mirror of Visual Arts
',
		'20115  -  מבוא ללימודי התאטרון והפרפורמנס  INTRODUCTION TO THEATRE AND PERFORMANCE STUDIES
',
		'20120  -  התאטרון בעת החדשה המוקדמת: מודרניזם ואוונגרד  HISTORY OF WESTERN THEATRE IN THE MODERN PERIOD: MODERNISM AND AVANTGARDE
',
		'20140  -  מבוא לתאטרון העברי והישראלי  INTRODUCTION TO HEBREW AND ISRAELI THEATRE
',
		'20187  -  ניתוח תאטרון יצירות ומופע  א  Play and Performance Analysis  1
',
		'20365  -  סדנת משחק ונוכחות בימתית  Stage Presence and Acting Techniques
',
		'20611  -  קולוקוויום  א  COLLOQUIUM  1
',
		'20702  -  פרפורמנס ואקטיביזם במרחב ציבורי  PERFORMANCE AND ACTIVISM IN THE PUBLIC SPACE
',
		'20720  -  פרוייקט במה  Performance Project
',
		'20486  -  חלל תיאטרלי  תפיסות ושיטות מחקר  THEATRICAL SPACE: MAJOR ASPECTS
',
		'20590  -  אמנות כמחקר (מעבדה)  Art as Research (lab)
',
		'20458  -  מביימים את שייקספיר בתאטרון ובקולנוע  Staging Shakespeare on Stage and Screen
',
		'20724  -  תרגיל הפקה  THEATRE PRODUCTION PRACTICE
',
		'23112  -  האזנה מודרכת ליצירות מופת במוסיקה המערבית  LISTENING TO MUSICAL MASTERPIECES in western music
',
		'23125  -  מוסיקה, אדם, עולם  MUSIC, PEOPLE, THE WORLD
',
		'23331  -  קונצרטו למוסיקה ומוח: מוסיקה מנקודת מבט קוגנטיבית  Concerto for Music and the Brain
',
		'23340  -  לא על "סלסה" בלבד: מוסיקה לטינואמריקנית  NOT ONLY ON "SALSA": SOUTHAMERICAN MUSIC
',
		'23607  -  Introduction to popular music in the contemporary Middle East  Introduction to popular music in the contemporary Middle East
',
		'23120  -  תולדות המוסיקה  העת העתיקה וימיהביניים  HISTORY OF MUSIC: ANTIQUITY AND MIDDLE AGES
',
		'23310  -  ניתוח בהקשרים היסטוריים תרבותיים (תיאוריה ב)  Analysis in Cultural Historical Contexts (Theory II)
',
		'23404  -  קוגניציה מוסיקלית: מוסיקה וקשרים עם יכולות אחרות  MUSIC COGNITION  part 2
',
		'23821  -  היבטים קוגניטיביים בביצוע המוסיקלי  COGNITIVE ASPECTS IN MUSICAL PEFORMANCE
',
		'23842  -  סיבה למסיבה: חגים חדשים בכנסייה של ימי הביניים  New Feasts in the Medieval Church
',
		'23847  -  מוסיקה, תיווי, ודפוס במאות ה 15 וה 16  Music, Notation, and Print in the 15th and 16th centuries
',
		'23938  -  סמינר מתקדם בקוגניציה מוסיקלית  MUSIC AND COGNITION : RESEARCH SEMINAR
',
		'23951  -  סמינריון חוגי במוסיקולוגיה  DEPARTMENTAL SEMINAR IN MUSICOLOGY
',
		'23415  -  סוגיות באתנומוסיקולוגיה: המרחב הצלילי החוץ מערבי: גישות מחקר  ETHNOMUSICOLOGY: INTRODUCTION TO NON WESTERN MUSIC
',
		'23603  -  תיאוריות פוסטטונאליות (תיאוריה ג)  Posttonal Theories (Theory III)
',
		'23107  -  תרגיל מעבדה א  הרמוניה ליד המקלדת  LABORATORY DRILL A KEYBOARD HARMONY
',
		'23311  -  מיומנויות שמיעה  ב  EAR TRAINING  II
',
		'23515  -  גמלאן  מוסיקה מאינדונזיה  INDONESIAN GAMELAN MUSIC
',
		'34218  -  מקורות הידע במדעים, במתמטיקה ובמדעי הרוח  The origins of knowledge in Science, Mathematics and Humanities
',
		'34223  -  מיינדפולנס, תרגולי התבוננות ולמידה חברתיתרגשית בחינוך  Mindfulness, contemplative practices and socialemotional learning in education
',
		'34228  -  צעירים ולמידה בעידן הדיגיטלי  Youth and Learning in the Digital Age
',
		'34230  -  בית הספר כסביבה מכילה: הטרוגניות בכיתה  School as an inclusive environment: Heterogeneity in the classroom
',
		'34326  -  היסטוריה ויצירתה של זהות לאומית יהודית  History Education and the Formation of a National Jewish Identity
',
		'34401  -  מיומנויות יסוד בקריאה ובכתיבה אקדמית  ELEMENTARY SKILLS IN ACADEMIC READING & WRITING
',
		'34481  -  ייעוץ למתבגרים  COUNSELLING FOR ADDLESCENCE
',
		'34503  -  פיתוח היכולות החברתיות של התלמיד במסגרת ביתהספר  DEVELOPING THE SOCIAL COMPETENCIES OF STUDENT
',
		'34526  -  סוגיות נבחרות בחינוך: ניתוח תוכניות וספרי לימוד  SELECTED ISSUES IN EDUCATION: ANALYSIS OF CURRIC
',
		'34533  -  מדיניות חינוך בישראל ובעולם  EDUCATION POLICIES IN ISRAEL AND IN THE WORLD
',
		'34554  -  החוויה תחילה: חינוך בלתי פורמאלי תנועות נוער, טיולים ופעילות בקהילה  Experience fist: Informal Education Youth Movements, Tours and Community Activity
',
		'34556  -  דרכים חדשות לחשוב, ללמוד ולנוע  New ways to think, learn and move
',
		'34558  -  מהגרים וריבוי זהויות בעידן הגלובלי  Migrants and multiple identities in the global era
',
		'34562  -  שילוב הידע: למידה מגוונת  Knowledge Integration  Diverse teaching strategies
',
		'34581  -  מבט סוציולוגי על החברה הערבית ובית הספר בישראל  Sociological view of the Arab society and the school in Israel
',
		'34589  -  המפגש בין הפילוסוף לאיש הדת: אתגרים והשלכות בחינוך  Confrontation between Philosophy and Religion: Educational Challenges and Implications
',
		'34593  -  היבטים חינוכיים ופסיכולוגיים של האינטרנט  Educational and Psychological Aspects of the Internet
',
		'34598  -  חינוך אזרחי רב תרבותי: המקרה הישראלי  Multicultural Civic Education: The Case of Israel
',
		'34601  -  ריבוי תרבויות או רבתרבותיות: גישה פסיכולוגיתחברתית  Cultural pluralism or multiculturalism: A sociopsychological perspective
',
		'34638  -  המפגש היהודי ערבי כאתגר חינוכי: מטרות ותוצאות  ENCOUNTERS BETWEEN ARABS AND JEWS AS AN EDUCATIO
',
		'34753  -  "שיפוט, העדפות ובחירה"  PREFERENCES AND CHOICE IN EDUCATION
',
		'34805  -  מבוא לתחום: "למידה והוראה"   An introduction to the discipline of learning and instruction
',
		'34810  -  הוראה בין תחומית: אתגרים קוריקולרים ואפיסטמיים  A
',
		'34819  -  קורס מלווה להצעת תזה  שנה א  MA THESIS PROPOSAL SEMINAR PART A
',
		'34822  -  שאלת הרוע והשלכותיה החינוכיות  ON EVIL AND ITS EDUCATIONAL IMPLICATIONS
',
		'34829  -  יסודות הגישה הייעוצית  THE BASICS OF THE COUNSELING APPROACH
',
		'34851  -  פיתוח כישורים חברתיים  השלכות לייעוץ  DEVELOP. SOC. SKILLS IMPLICATION FOR COUNSELING
',
		'34866  -  מבוא לטכנולוגיה חינוכית  INTRODUCTION TO TECHNOLOGY IN EDUCATION
',
		'34878  -  שיטות סטטיסטיות מתקדמות במחקר פסיכולוגי  ADVANCED STATISTICAL METHODS IN PSYCHO. RES.
',
		'34885  -  בית הספר בעידן הידע  פדגוגיות מתקדמות  SCHOOL IN THE AGE OF KNOWLEDGE  NEW PEDAGOGIES
',
		'34887  -  יישומי הייעוץ הארגוני  ORGANIZATIONAL COUNSELLING APPLICATIONS
',
		'34906  -  רפורמות ומדיניות חינוך בישראל  EDUCATIONAL REFORMS AND POLICY MAKING IN ISRAEL
',
		'34919  -  שילוב  INTEGRATION/INCLUSION
',
		'34935  -  ניתוח התנהגות ייישומי (ABA) בבית הספר  Applied behavior analysis (ABA) in the school
',
		'34940  -  קריאה חלק א: יסודות בתהליכי קריאה  READ. PART A:FUNDAMENTAL PROCESSES OF READING
',
		'34945  -  פסיכופתולוגיה של הילדות וההתבגרות  חלק ב  DISORDERS IN CHILDHOOD AND ADOLESCENCE
',
		'34960  -  יסודות בהערכה פסיכולוגית פרטנית  PSYCHOLOGICAL ASSESSMENT
',
		'34966  -  היבטים תאורטיים של הנחיית קבוצות  Theoretical aspects of groupleading"
',
		'34973  -  סוגיות בקבלת החלטות  א  SELECTED TOPICS IN DECISION MAKING
',
		'34988  -  סוגיות בפרקטיקה בפסיכולוגיה קלינית של הילד  SELECTED TOPICS IN CLINICAL CHILD PSYCHOLOGY
',
		'34995  -  קריאה חלק ב: ליקויי קריאה  READING  PART B: READING DISABILITIES
',
		'37016  -  חינוך מוסרי בימינו  CONTEMPORARY MORAL EDUCATION
',
		'37225  -  השלמה במחקר בחינוך  PREREQUISITE IN EDUCATINAL RESEARCH
',
		'37806  -  שיטות סטטיסטיות מתקדמות במחקר בחינוך  Advanced statistical method in educational research
',
		'37814  -  ליקויי למידה במתמטיקה: היבטים תאורטיים  LEARNING DISABILITIES & MATH: THEORETICAL ASPECT
',
		'37832  -  היבטים תרבותיים בייעוץ  CULTURAL ASPECTS IN COUNSELING
',
		'37837  -  כישורים חברתיים של ילדים בחינוך המיוחד: היבטים תיאורטיים  Social skills of children in special education: theoretical aspects and practical implications
',
		'37847  -  לנתח, לפרש, ושוב להתבונן: מחקר איכותני בחינוך למתקדמים  To Analyze, Interpret, and Reflect: Advanced Qualitative Methodology in Education
',
		'37857  -  הערכה פסיכודיאגנוסטית של ילדים ובני נוער  Psychological assessment of children and youth
',
		'37862  -  תפקיד מנהל בי"ס בהערכה ובפיתוח פרופסיונאלי של מורים  Professional development as the core competence of school leaders
',
		'37879  -  מנהיגות בחינוך  LEADERSHIP IN EDUCATION
',
		'37886  -  היוועצות: תיאוריה והלכה למעשה  Consultation: Theory and practice
',
		'37898  -  תכנון, שינוי ותכנון של שינויים בחינוך  Planning, change and the planning of educational change
',
		'37904  -  משא ומתן  היבטים התנהגותיים א  Negotiation Behavioral perspective A
',
		'37912  -  החינוך במאה ה 21 במבט בינתחומי  Education in the 21st century from an interdisciplinary perspective
',
		'37932  -  התערבות במצבי משבר ביחיד ובמשפחה  crisis intervention in families and individuals
',
		'37937  -  ראיון, תצפית ותקשורת טיפולית עם ילדים 
',
		'37949  -  הדרה, סיכון וסיכוי: ילדים ונוער בחברה הערבית  Exclusion, risk and chance: Children and youth in the Arab society
',
		'37957  -  הפרעת קשב וריכוז: מופעים, מנגנונים, איכות חיים  ADHD: presentations, mechanisms and quality of life
',
		'37963  -  תקשורת בין אישית בעבודת היועץ  INTERPERSONAL COMMUNICATION IN COUNSELORS WORK
',
		'37967  -  מנהיגות חינוכית ושינויים משמעותיים במערכת החינוך הערבית  Educational leadership and significant changes in the Arab education system
',
		'37972  -  ניהול עצמי  משליטה מרכזית לשליטה מקומית  SCHOOL BASED MANAGEMENT: MOVING TO LOCAL CONTROL
',
		'37974  -  התנסות בשדה בפסיכולוגיה חינוכית  א  Educational psychology Field Practice
',
		'37980  -  מבוא לפסיכותרפיה פסיכודינמית, תיאוריה ופרקטיקה א  (Introduction to Psychodynamic Psychotherapy from Theory to Practice (Part A)
',
		'37983  -  היבטים יישומיים בדיאגנוסטיקה  practical aspects of child and adolescent psychodiagnostics
',
		'37985  -  האינטרנט בשירות ההוראה והלמידה  THE INTERNET IN EDUCATION AND LEARNING
',
		'37987  -  אלימות ותוקפנות בביה"ס  הערכה, מניעה וטיפול  VIOLENCE & AGGRES. IN SCHOOL: EVALUA. & TREATM.
',
		'37989  -  פסיכופתולוגיה א  psychopathology A
',
		'37992  -  פסיכופתולוגיה ב  psychopathology B
',
		'37996  -  הוראת סוגיות שנויות במחלוקת בבית הספר: תיאוריה ופרקטיקה  Dealing with Controversial Issues in school: Theory and Practice
',
		'37999  -  היסודות הפסיכולוגיים של ליקויי הלמידה  PSYCHOLOGICAL BASIS OF LEARNING DISABILITIES
',
		'34410  -  תקשורת ביןאישית  INTERPERSONAL COMMUNICATION
',
		'34930  -  "התנסות קלינית  טיפול"  Clinical Training  Intervention
',
		'37820  -  מיומנויות ייעוציות  שנה א  counselling skills  1 year
',
		'37836  -  קריאה: הדרכה להתנסות טיפולית  WORKSHOP ON REMEDIAL INTERVENTION METHODS
',
		'37919  -  הכשרה מקצועית  שנה ב  SUPERVISED FIELDWORK  SECOND YEAR
',
		'37947  -  מיומנויות ייעוציות מגזר ערבי  שנה א  counselling skills  1 year
',
		'37950  -  עבודה מעשית מגזר ערבי שנה ב  PRACTICAL WORK  SECOND YEAR
',
		'37990  -  חשבון: הדרכה להתנסות טיפולית  WORKSHOP ON REMEDIAL INTERVENTION METHODS
',
		'34204  -  מבוא לפילוסופיה של החינוך  INTRODUCTION TO THE PHILOSOPHY OF EDUCATION
',
		'34209  -  סוגיות מחקר בחינוך  RESEARCH METHODS IN EDUCATION
',
		'34032  -  היבטים ביןתרבותיים בייעוץ  CROSSCULTURAL ASPECTS OF COUNSELING
',
		'34402  -  סמינר בייצוג היסטורי בחברה הישראלית  MEMORY IN THE PUBLIC SPACE IN ISRAEL  SEMINAR
',
		'34440  -  הגשת עבודה באיחור  SEMINAR PAPER  IN DELAY
',
		'34442  -  הגשת עבודה באיחור  SEMINAR PAPER  IN DELAY
',
		'34444  -  הגשת עבודה באיחור  SEMINAR PAPER  IN DELAY
',
		'34447  -  הגשת עבודה באיחור  SEMINAR PAPER  IN DELAY
',
		'34460  -  התנסות מחקרית  לתלמידי חינוך ופסיכולוגיה ולתלמידי חינוך וסוציולוגיה  RESEARCH EXPERIENCE
',
		'34563  -  שילוב הידע  למידה מגוונת  סמינר  Knowledge Integration  Diverse teaching strategies  seminar
',
		'34808  -  תפקיד המורה במאה ה 21  סמינר מחקר  THE CHANGING TASK OF THE TEACHER IN THE 21ST  SEMINAR
',
		'34898  -  פיתוח מנהיגות פדגוגית  DEVELOPING PEDAGOGIC LEADERSHIP
',
		'34956  -  מטיפוח צוות לפיתוח ארגוני  HUMAN RESOURCE MANAGEMENT AND ORG. DEVEL.
',
		'37834  -  הספקטרום האוטיסטי: משפחות ומערכות  Autism Spectrum Disorder: Families and Systems
',
		'37849  -  סמינריון מגמה  שנה ב  SEMINAR DIVISION  Second year
',
		'37882  -  המיזמים הגדולים בישראל, המטפחים שינוי בלמידה והוראה  Representative educational Israeli projects that foster educational change
',
		'37896  -  היכן האב? מנפקדות למעורבות בחדר הטיפולים  Where is the Father? From Absence to Involvement in the Therapy Room
',
		'37936  -  מגדר ומחשבה פמיניסטית: חברה, חינוך, תרבות ופוליטיקה  Gender and Feminist Thought: Society, Education, Culture and Politics
',
		'37976  -  תהליכים טיפוליים בהתערבות אינדיבידואלית  חלק ב  THERAPEUITIC PROCESSES IN INDIVID. INETERVENTION  PART B
',
		'34216  -  מהתיאורייה לשדה החינוכי ובחזרה  From Theory to the Educational Field and Back
',
		'37893  -  הדרכה קבוצתית מלווית פרקטיקום שנה ב  Group Supervision of Second Year Practicum Students
',
		'34774  -  כתיבה אקדמית במחקר תאורטי  Advanced academic writing
',
		'34208  -  השתתפות בניסויים  PARTICIPATION IN RESEARCH
',
		'34815  -  עבודה מעשית  שנה ב  PRACTICAL WORK  SECOND YEAR
',
		'37951  -  הכשרה מקצועית מגזר ערבי שנה ב  A
',
		'37877  -  קורס מלווה לתזה א  MA THESIS SEMINAR  A
',
		'34002  -  חקר המשפחה כרשות מחנכת  THE STUDY OF THE FAMILY AS AN EDUCATOR
',
		'34010  -  המורה בכיתה ההטרוגנית: עיצוב אוניברסלי ללמידה  The heterogeneous classroom teacher: a universal design for learning
',
		'34014  -  פדגוגיה פרוגרסיבית בהוראת מדעי הטבע התאוריה והפרקטיקה בשדה החינוכי  Progressive Pedagogy in Science EducationTheory and Practice in the Educational Fie
',
		'34034  -  סוגיות בחברה ופוליטיקה בישראל: בסיס ללמידת חקר בהוראת אזרחות  Issues in Society and Politics in Israel: A Basis for the Study of Teaching Civics
',
		'34068  -  הוראת מדעים: מהמחקר לכיתה  TEACHING SCIENCE: FROM RESEARCH TO CLASSROOM
',
		'34080  -  שילוב טכנולוגיה בהוראת מתמטיקה  Integration of technology in teaching mathematics
',
		'34089  -  חושבים אמנות: דרכי ידיעה אסתטיות וחשיבה מסדר גבוה בשעור לאמנות  Aesthetic modes of knowing and Higher Order Thinking in the Art lesson
',
		'34099  -  טיפוח זהות תרבותית בקרב מתבגרים  Cultivating cultural identity in adolescents
',
		'34106  -  רב תרבותיות ושונות בכיתה  Multiculturalism and diversity in the classroom
',
		'34136  -  סוגיות בתורת הצורות  Topics in Hebrew morphology
',
		'34142  -  פיתוח מיומנויות ההאזנה הצפייה וההבעה בעל פה  Developing skills: listening and visual comprehension and oral expression
',
		'34144  -  סוגיות בסמנטיקה  Topics in semantics
',
		'34147  -  סוגיות בתחביר  Topics in syntax
',
		'34157  -  פדגוגיה של תרגום בהוראת אנגלית כשפה זרה  Pedagogy of translation in teaching a foreign language
',
		'34171  -  עברית בראי התרבות  Hebrew in the mirror of culture
',
		'34283  -  חינוך וחברה  EDUCATION AND SOCIETY
',
		'34352  -  דילמות של מורה בעידן האינטרנט  A Teachers Dilemmas in the Digital Era
',
		'34367  -  פיתוח הוראה עתירת חשיבה  Teaching of Thinking
',
		'34371  -  התפתחות והתבגרות  Development and Maturation
',
		'34074  -  חינוך מיוחד  סמינריון דידקטי  A DIDACTIC SEMINAR  SPECIAL EDUCATION
',
		'34092  -  אנגלית  סמינריון דידקטי II  Didactic Seminar II  English
',
		'34188  -  הוראת ערבית בישראל  אתגרים ודילמות  Teaching Arabic in Israel  Challenges and Dilemmas
',
		'34270  -  פסיכולוגיה  סמינריון דידקטי  A DIDACTIC SEMINAR  PSYCHOLOGY TEACHING
',
		'34318  -  אנגלית  סמינריון דידקטי I  A DIDACTIC SEMINAR I  ENGLISH TEACHING
',
		'34323  -  פיסיקה  סמינריון דידקטי  A DIDACTIC SEMINAR  PHYSICS TEACHING
',
		'34335  -  הוראת העברית כלשון ראשונה וכלשון נוספת  THE ACQUISITION & TEACHING OF HEBREW AS L1 & L2
',
		'34400  -  ביולוגיה וכימיה  סמינריון דידקטי  Biology and Chemistry  Didactic Seminar
',
		'34077  -  חינוך אזרחי בפעולה: סיורים בחברה הישראלית  תכנית מנהיגות חינוכית חברתית  Civic education in action: Field trips in Israeli society  Social educational leadership program
',
		'34019  -  סדנה מתודית בהוראת ספרות ופילוסופיה  Methodic Workshop in Literature and Philosophy Teaching
',
		'34048  -  עבודה עם לקויות למידה II: התנסות מעשית וסדנה  Coping with learning disabilities II: TEACHING PRACTICE AND WORKSHOP
',
		'34055  -  האתגר של תלמידים מחוננים ומצטיינים  התנסות מעשית וסדנה  Challenge of gifted and outstanding students  teaching practice and workshop
',
		'34063  -  עבודה עם לקויות למידה I  התנסות מעשית וסדנה  Working with Learning Disabilities I  Teaching practice and workshop
',
		'34065  -  מודל החינוך היהודיערבי: הלכה למעשה  התנסות מעשית וסדנה  The model of JewishArab education in practice  teaching practice and workshop
',
		'34096  -  למידה בינתחומית: סדנה והתנסות מעשית  Interdisciplinary Learning: Workshop and Practical Experience
',
		'34121  -  סדנה מתודית בהוראת מתמטיקה  הזנק להוראה  METHODOLOGICAL WORKSHOP IN TEACHING MATHEMATICS  special program
',
		'34135  -  סדנה מתודית בהוראת תרבות יהודיתישראלית  Methodological workshop on teaching JewishIsraeli culture
',
		'34150  -  "סוד הגן הקסום": התנסות מעשית וסדנה בחינוך וסביבה  "The secret of the magical garden": Practice and Workshop in Education and Environment
',
		'34153  -  תהיי יפה ותדברי: סוגיות מגדריות בהוראה  התנסות מעשית וסדנה  Be beautiful and talk: gender issues in teaching  practice and workshop
',
		'34162  -  סדנה מתודית בהוראת לשון עברית לדוברי ערבית  Methodological Workshop  Hebrew Language for Arabic speakers
',
		'34169  -  סדנה מתודית בהוראת ארכאולוגיה  Methodical Workshop  Archaeology
',
		'34179  -  סדנה מתודית בהוראת מחשבת ישראל  Methodological Workshop in Teaching Israel Studies
',
		'34187  -  סדנה מתודית בהוראת ניהול עסקי  Methodological Workshop in Business Management
',
		'34200  -  סדנה מתודית בהוראת אזרחות לדוברי ערבית II  Methodological Workshop on Civics Teaching for Arabic Speakers II
',
		'34211  -  סדנה מתודית בהוראת ביולוגיה  METHODIC WORKSHOP  BIOLOGY
',
		'34234  -  סדנה מתודית בהוראת היסטוריה  METHODIC WORKSHOP  HISTORY
',
		'34243  -  סדנה מתודית בהוראת חינוך מיוחד ולקויות למידה, שנה א  METHODOLOGICAL WORKSHOPSPEC. EDUC. & LEARN. DISABI
',
		'34253  -  סדנה מתודית בהוראת הלשון העברית  METHODIC WORKSHOP  HEBREW LANGUAGE
',
		'34288  -  סדנה מתודית בהוראת פסיכולוגיה  METHODIC WORKSHOP  PSYCHOLOGY
',
		'34297  -  סדנה מתודית בהוראת חינוך מיוחד ולקויות למידה, שנה ב  METHODIC WORKSHOPSPEC. EDUC. & LEARN. DISABLII
',
		'34307  -  סדנה מתודית בהוראת אמנות, שנה ב  DIDACTICT WORKSHOP  ART HISTORY II
',
		'34334  -  הוראת כישורי חיים  התנסות מעשית וסדנה  LIFE SKILLS  TEACHING PRACTICE AND WORKSHOP
',
		'34345  -  סדנה מתודית בהוראת פיסיקה  METHODIC WORKSHOP  PHYSICS
',
		'34370  -  למידה והוראה  סדנא יישומית  Learning and Instruction  Applied Workshop
',
		'34388  -  סדנה מתודית בהוראת מדעי המחשב  Didactic Workshop on Computer Science Teaching
',
		'34011  -  התנסות מעשית בהוראת אזרחות לדוברי ערבית  Practical experience in Civics teaching for Arabic speakers
',
		'34046  -  התנסות בהוראת סינית  Practical Experience in Teaching Chinese
',
		'34057  -  התנסות מעשית בהוראת אנגלית  אקדמיה כיתה  Practical experience in English teaching  Academia Kita
',
		'34066  -  תאוריות למידה והוראת מתמטיקה בכיתה  Theory of learning and teaching mathematics in class
',
		'34088  -  התנסות בהוראת אנגלית  TEACHING PRACTICE  ENGLISH
',
		'34098  -  התנסות בהוראת תקשורת  Teaching Practice  Communication
',
		'34107  -  התנסות בהוראת היסטוריה  TEACHING PRACTICE  HISTORY
',
		'34113  -  התנסות בהוראת חינוך מיוחד ולקויות למידה, שנה ב  MENTORED TEACHING PRACTICE II  SPECIAL EDUCATION
',
		'34115  -  התנסות בהוראת הלשון העברית  TEACHING PRACTICEHEBREW LANGUAGE
',
		'34119  -  התנסות בהוראת סוציולוגיה  TEACHING PRACTICESOCIOLOGY
',
		'34122  -  התנסות בהוראת פסיכולוגיה  TEACHING PRACTICE  PSYCHOLOGY
',
		'34125  -  התנסות בהוראת תולדות אמנות  TEACHING PRACTICE  History of Arts
',
		'34132  -  התנסות בהוראת עולם הערבים והאסלאם  TEACHING PRACTICE  The world of Arabs and Islam
',
		'34161  -  התנסות מעשית בהוראת לשון עברית לדוברי ערבית  Practical experience in teaching Hebrew Language for Arabic speakers
',
		'34172  -  הכשרה מעשית כללית בחינוך והוראה I  General practical training in education and teaching I
',
		'34178  -  התנסות מעשית בהוראת מחשבת ישראל  Practical Experience in Teaching Israel Studies
',
		'34186  -  התנסות מעשית בהוראת ניהול עסקי  Practical Experience in Business Management
',
		'34380  -  התנסות אקדמיה כיתה  teaching practice  academy classroom
',
		'34386  -  התנסות בהוראת מדעי המחשב  Teaching Practice  Computer Science
',
		'10107  -  גישות דידקטיות בהוראת תרבות יהודית  ישראלית  DIDACTIC APPROACHES TO TEACHING JEWISH  ISRAELI CULTURE
',
		'10103  -  מבוא ללמידה ולהוראת תרבות יהודיתישראלית במערכת החינוך הממלכתית  An Introduction to Studying and Teaching JewishIsraeli Culture in the Public School System
',
		'10111  -  הוראת תרבות יהודית  ישראלית סדנה פדגוגית בגישות חינוכיות  TEACHING JEWISH  ISRAELI CULTURE  A PEDAGOGIC WORKSHOP
',
		'10121  -  הוראת מקרא  סדנה פדגוגית בגישות חינוכיות  TEACHING BIBLE A PEDAGOGIC WORKSHOP
',
		'10112  -  התנסות מעשית בהוראת תרבות יהודית  ישראלית  INTERNSHIP IN TEACHING JEWISH  ISRAELI CULTURE
',
		'10134  -  התנסות מעשית בהוראת מקצועות היהדות  INTERNSHIP IN TEACHING JEWISH SUBJECTS
',
		'10133  -  סוגיות בחינוך: דילמות והתמודדויות בהוראת מקצועות היהדות.  Topics in Education: Dilemmas and Meeting Challenges in Teaching Jewish Studies
',
		'11017  -  הבנת טקסטים מדעיים באנגלית  מתקדמים א (תכנית משטרה)  English for Academic Purposes  Upper level
',
		'11051  -  כתיבה אקדמית באנגלית לדוקטורנטים מצטיינים במדעי החברה  ACADEMIC WRITING FOR PHD. STUDENTS  SOCIAL SCIENCES
',
		'11053  -  קורס כתיבה אקדמית עבור דוקטורנטים מחוג פסיכולוגיה  Academic Writing in English for Doctor Students in Psychology
',
		'11121  -  הבנת טקסטים מדעיים באנגלית מתקדמים ב  טבע  English for Academic Purposes  Upper Advanced
',
		'11123  -  הבנת טקסטים מדעיים באנגלית  רמה 3  Reading English for Academic Purposes  Basic Level
',
		'11131  -  הבנת טקסטים מדעיים באנגלית מתקדמים ב (רוקחות) ומדעי הרפואה  ENGLISH FOR ACADEMIC PURPOSES  UPPER ADVANCED
',
		'11142  -  הבנת טקסטים מדעיים באנגלית מתקדמים א (סיעוד)  English for Academic Purposes  Lower Advanced
',
		'11183  -  הבנת טקסטים מדעיים באנגלית  רמה 3  Reading English for Academic Purposes  Basic Level
',
		'25102  -  המכינה לעברית  רמה ד  HEBREW LANGUAGE LOWER ADVANCED  LEVEL D (4)
',
		'25119  -  המכינה לעברית  רמה ו  ADVANCED HEBREW LANGUAGE  LEVEL F (6)
',
		'8301  -  התמחות לתלמידי מדעי הרוח  Internship in Humanities
',
		'63612  -  ישראל והעמים: שאלות של זהות במחשבה היהודית  E
',
		'63615  -  יהודייה בגוף ראשון  דרכים למונולוג היהודי במאה ה 21  E
',
		'63617  -  פועלי בניין: מבית מדרש ליצירת קהילה  Construction Workers: From Beit Midrash to Building a Community
',
		'63628  -  סמינר עמיתי מלטון לחינוך יהודי  מפגש ושיח  Meltons Fellows Seminar for Jewish Education  Encounter and Dialogue
',
		'63631  -  חינוך ולימוד בספרות חז"ל  Education and Study in Talmudic Literature
',
		'63633  -  קריאות בטקסטים, בטקסים ובחיים: מבטים מגדריים על חינוך ויהדות  Readings in Texts, Rituals, and Life: Gender Perspectives on Education and Judaism
',
		'63635  -  הביתה מסע במקורות :הבית האישי ,אל בית המדרש ואל בית הספר  Going Home: A Jorny through Sourcesfrom the individuals home to the Beit Midrash to the school
',
		'63660  -  חדשנות טכנולוגית ויזמות חברתית  Technological Innovation and Social Entrepreneurship
',
		'63713  -  בין פנים לחוץ: על האורתודוקסיה המודרנית: עיון בכתבי הרב סולובייציק, הרב קוק, דוד הרטמן ותלמידיהם  .On Modern Orthodoxy: Reading in the Writings of R. Soloveitchik, R. Kook & R. Hartman and their Int
',
		'63746  -  פילוסופיה של ההלכה ופילוסופיה של החינוך  AAAA
',
		'63858  -  ביקורת על הליברליזם  CRITIQUING ISRAELI LIBERALISM
',
		'63922  -  חינוך יהודי כביקורת תרבותית  JEWISH EDUCATION AS CULTURAL CRITICISM
',
		'63961  -  מחקר כמותי בחינוך היהודי  RESEARCH METHODS IN JEWISH EDUCATION
',
		'63001  -  קורס השלמה: מקצועות מדעי החינוך  FOUNDATIONS OF EDUCATION
',
		'63003  -  תכניות לימודים והוראת טקסטים יהודיים  Curriculum and the Teaching of Jewish Texts
',
		'63005  -  הוראת ישראל ואתגרי הציונות במאה הXXI  Israel Education and the challenge of Zionism in the 21st century.
',
		'63007  -  סוגיות בפילוסופיה וחינוך יהודי  Issues in Philosophy and Jewish Education
',
		'63009  -  מדרש ותלמוד: טקסטים בחינוך  Midrash and Talmud: Texts on Education
',
		'63012  -  חידוש הפרקטיקה בהוראת ישראל  Renewing the practice of Israel Education
',
		'63014  -  יזמות וחדשנות בחינוך יהודי  Entrepreneurship and Innovation in Jewish Education
',
		'63019  -  החייאת השפה העברית: היסטוריה, תרבות וזהות  The Revival of Spoken Hebrew  History, culture and identity
',
		'63021  -  הסיור הלימודי: למידה באתרים  The Educational Tour: Learning in places
',
		'63050  -  קורס השלמה במדעי החינוך  Curso Complementario sobre Fundamentos de la Educacin
',
		'63052  -  החזון בחינוך היהודי  Visions in Jewish Education
',
		'63054  -  תכניות לימודים והוראת טקסטים יהודיים  Curriculum and the Teaching of Jewish
',
		'63056  -  מדעי החברה וזהות יהודית  Social Sciences and Jewish Education
',
		'63058  -  חינוך חוויתי ובלתיפורמאלי  Informal and Experiential Education
',
		'63060  -  מדרש ותלמוד: טקסטים בחינוך  Midrash and Talmud: Texts on Education
',
		'63062  -  מהגרים וריבוי זהויות בעידן הגלובלי  Migrantes e identidades mltiples en la era global
',
		'63064  -  יזמות וחדשנות בחינוך יהודי  Entrepreneurship and Innovation in Jewish Education
',
		'63066  -  סוגיות בפילוסופיה וחינוך יהודי  Issues in Philosophy and Jewish Education
',
		'8223  -  לכתוב את האחר: קריאה מודרכת בטקסטים אנתרופולוגיים  Writing the Other: Guided Readings in Anthropological Texts
',
		'8154  -  הקונפליקט הישראלי פלסטיני  The Israeli Palestinian Conflict
',
		'8231  -  הטובים והמאושרים: סוגיות באתיקה יוונית  THE GOOD AND THE HAPPY: THEMES IN GREEK ETHICS
',
		'8243  -  להתבונן במוות, 19001400  Observing Death,14001900
',
		'8152  -  השפות האדריכליות של ונציה, 17501100  Architectural Languages of Venice
',
		'8205  -  חשיבה מדעית בהקשר חברתי  SCIENTIFIC THOUGHT IN ITS SOCIAL CONTEXT
',
		'8219  -  Representing Violence  Representing Violence
',
		'8237  -  סדנה מסכמת  הודו. סיתא הכפולה: מסע אל נבכי ותעתועי הקודיאם  Sita the Doppleganger: A Journey into the Mysteries of Kudiyattam
',
		'8253  -  Selected Topics in the History of Capitalism  Selected Topics in the History of Capitalism
',
		'8272  -  מיסטיקה בימי הביניים: בין אסלאם ליהדות  Medieval Mysticism: Between Islam and Judaism
',
		'8247  -  מועדון "אמירים"  AMIRIM MEETING CLUB
',
		'8500  -  הדרכה אישית לבוגר לתלמידים מצטיינים  INDIVIDUAL TUTORING FOR EXCELLENT B.A STUDIES
',
		'8502  -  הדרכה אישית לבוגר לתלמידים מצטיינים  INDIVIDUAL TUTORING FOR EXCELLENT B.A. STUDENTS
',
		'8504  -  הדרכה אישית לבוגר  PERSONAL TUTORING FOR B.A. STUDENTS
',
		'8811  -  הדרכה אישית למוסמך  TUTORIAL
',
		'8813  -  הדרכה אישית למוסמך  TUTORIAL
',
		'8816  -  הדרכה אישית למוסמך  א  PERSONAL TUTORING FOR M.A. STUDENTS  I
',
		'33001  -  מבוא למדעי הרוח הדיגיטליים  Introduction to Digital Humanities
',
		'8010  -  סדנה דידקטית למורים במיומנויות הקריאה והכתיבה  DIDACTIC WORKSHOP IN READING & WRITING SKILLS
',
		'8007  -  מיומנויות הקריאה והכתיבה  2  ACADEMIC WRITING & READING SKILLS IN HEBREW  2
',
		'8741  -  השתתפות במפעל מחקר במדעי הרוח  PARTICIPATING IN RESEARCH PROJECT IN HUMANITIES
',
		'8518  -  הגשת עבודה סמינריונית  ג  SEMINAR PAPER  3
',
		'8520  -  הגשת עבודה סמינריונית  א  SEMINAR PAPER  1
',
		'8523  -  הגשת עבודה סמינריונית  ה  SEMINAR PAPER  5
',
		'8525  -  הגשת עבודה סמינריונית באיחור  2  SEMINAR PAPER  IN DELAY (2)
',
		'8527  -  הגשת עבודה סמינריונית באיחור (4)  SEMINAR PAPER  IN DELAY (4)
',
		'8529  -  הגשת עבודה סמינריונית באיחור (7)  SEMINAR PAPER  IN DELAY (7)
',
		'8531  -  הגשת עבודה סמינריונית באיחור (9)  SEMINAR PAPER  IN DELAY (9)
',
		'8533  -  הגשת עבודה סמינריונית באיחור (11)  SEMINAR PAPER  IN DELAY (11)
',
		'8535  -  הגשת עבודה סמינריונית באיחור (5)  SEMINAR PAPER  IN DELAY (5)
',
		'8612  -  עבודה סמינריונית לתלמידים מצטיינים  SEMINAR PAPER FOR EXCELLENT B.A. STUDENTS
',
		'74100  -  חילופי סטודנטים  STUDENT EXCHANGE
',
		'74102  -  חילופי סטודנטים במתכונת מקוונת  ONLINE STUDENT EXCHANGE
',
		'74111  -  לימודים אקדמיים במוסד אחר (5)  PREVIOUS ACADEMIC STUDIES (5)
',
		'74114  -  לימודים אקדמיים במוסד אחר (10)  PREVIOUS ACADEMIC STUDIES (10)
',
		'74116  -  לימודים אקדמיים במוסד אחר (2)  PREVIOUS ACADEMIC STUDIES (2)
',
		'74118  -  לימודים אקדמיים במוסד אחר (6)  PREVIOUS ACADEMIC STUDIES (6)
',
		'74121  -  לימודים אקדמיים במוסד אחר (7)  PREVIOUS ACADEMIC STUDIES (7)
',
		'74126  -  לימודים אקדמיים במוסד אחר (2)  PREVIOUS ACADEMIC STUDIES (2)
',
		'74128  -  לימודים אקדמיים במוסד אחר (4)  PREVIOUS ACADEMIC STUDIES (4)
',
		'74130  -  קורס קצר בחו"ל  Short course abroad
',
		'74994  -  התקדמות בחוג  Progress in class
',
		'74996  -  התקדמות בחוג  Progress in class
',
		'74998  -  התקדמות בחוג 
',
		'74140  -  ייצוג האוניברסיטה  Representation of the University
',
		'74150  -  לומדה למניעת הטרדה מינית  course for the prevention of sexual harassment
',
		'74120  -  פטור מאנגלית חוץ אוניברסיטאי  EXEMPTION FROM ENGL. ACAD. C. OUT OF HEB. UNIV
',
		'74445  -  עבודת גמר בלימודי מ"א  MASTERS THESIS
',
		'74448  -  בחינה אינטגרטיבית למסלול ישיר לתואר דוקטור  INTEGRATIVE EXAM FOR DIRECT DOCTOR DEGREE
',
		'74500  -  דו"ח התקדמותתלמידי מחקר  RESEARCH STUDENTS PROGRESS REPORT
',
		'74502  -  דו"ח התקדמותתלמידי מחקר 
',
		'74701  -  הגשת עבודה סמינריונית באיחור  SEMINAR PAPER
',
		'74703  -  הגשת עבודה סמינריונית באיחור  SEMINAR PAPER
',
		'74705  -  הגשת עבודה סמנריונית באיחור  SEMINAR PAPER
',
		'74707  -  הגשת עבודה סמינריונית באיחור  SEMINAR PAPER
',
		'30912  -  שמרנות, פרשנות וחדשנות  Conservatism, interpretation and innovation
'
];
HUJI_courses_lists['הפקולטה למדעי הטבע'] = 
[
		'54210  -  מדעי הצחוק  The science of laughing
',
		'83106  -  סוגיות במחקר בהנדסת חשמל ומחשבים  Research in Electrical and Computer Engineering
',
		'83842  -  נושאים נבחרים באלקטרואופטיקה  ADVANCED TOPICS IN ELECTROOPTICS
',
		'83312  -  מכניקה ויחסות פרטית לתלמידי הנדסה  MECHANICS AND SPECIAL RELATIVITY FOR ENGINEERING
',
		'83320  -  מבוא למצב מוצק לתלמידי הנדסה  INTRO. TO CONDENSED MATTER PHYS. FOR ENGINEERING
',
		'83326  -  מבוא לקוונטים למהנדסים  INTRODUCTION TO QUANTUM MECHANICS FOR ENGINEERS
',
		'83335  -  מבוא להנדסת חשמל  INTRODUCTION TO ELECTRICAL ENGINEERING
',
		'83536  -  מאלגברה לינארית לאייפון (א): הנדסת חשמל ומערכות מעקרונות ראשוניים  FROM LINEAR ALGEBRA TO THE iPhone:INTRO TO ELECTRICAL AND SYSTEM ENGINEERING FROM BASIC PRINCIPLES
',
		'83812  -  התקנים של מוליכים למחצה  SEMICONDUCTOR DEVICES
',
		'83861  -  אלקטרואופטיקה קוונטית א: פיסיקת הלייזרים  LASER PHYSICS
',
		'83879  -  מבוא לאופטואלקטרוניקה  AN INTRODUCTION TO OPTRONICS
',
		'83882  -  פיסיקה של התקני מוליכים למחצה  THE PHYSICS OF SEMICONDUCTOR DEVICES
',
		'83888  -  גלים אלקטרו מגנטיים ואנטנות  ELECTROMAGNETIC WAVES AND ANTENNAS
',
		'83315  -  מעבדה בפיסיקה להנדסה  PHYSICS LABORATORY FOR ENGINEERING
',
		'83394  -  מעבדה באלקטרוניקה ספרתית  INTERFACING ANALOG AND DIGITAL WORLDS
',
		'83412  -  מעבדת מדידות מיקרואלקטרוניקה  MICROELECTRONICS DIVICES LAB
',
		'83511  -  תכן לוגי מתקדם  ADVANCED LOGIC DESIGN
',
		'83519  -  סדנה לתלמידי הנדסה (1)  ENGINEERING PROJECT AND WORKSHOP (1)
',
		'83908  -  סמינר דוקטורט בפיסיקה יישומית  Applies Physics Doctoral Seminar
',
		'79619  -  פיזיקה חישובית לניתוח מערכות  Numerical Physics for Systems analysis
',
		'79317  -  פרוייקטון תלפיות  projecton Talpiot
',
		'76629  -  תכנות מתמטי במאטלב לכימיה  MATHEMATICAL PROGRAMMING WITH MATLAB FOR CHEMISTRY
',
		'76632  -  תכנות מתקדם בפייתון  PYTHON 2
',
		'76637  -  תכנות בשפת פייתון  programming in python
',
		'76641  -  תכנות פייתון ומטלאב  PYTHON PROGRAMMING AND MATLAB
',
		'76689  -  מבני נתונים ומבוא לאלגוריתמים  Introduction to Algorithms
',
		'80107  -  מבט מתמטי על מדעי הטבע  A Mathematical view on some natural sciences
',
		'80301  -  אנליזה נומרית  NUMERIC ANALYSIS
',
		'80304  -  חשבון אינפיניטסימלי ב לתכנית הנשיא  Infinitesimal Calculus 2 for the presidents program
',
		'80306  -  הכנה ללימודי מתמטיקה לתלמידי אודיסיאה  חלק א  Preparatory math for Odyssey program, part 1
',
		'80421  -  תורת ההסתברות (2)  PROBABILITY THEORY (2)
',
		'80559  -  מונים גדולים  Large Cardinals
',
		'80564  -  אלגברה לינארית לפיסיקאים לתלמידי אודיסיאה  חלק ב  Linear algebra for physicists for Odyssey program, part 2
',
		'80568  -  נושאים מתקדמים בתורת החבורות  Advanced topics in group theory
',
		'80579  -  כפיה ואיתלות בתורת הקבוצות  FORCING AND INDEPENDENCE IN SET THEORY
',
		'80623  -  גאומטריות קלאסיות  Classical geometries
',
		'80637  -  גאומטריה אלגברית  ALGEBRAIC GEOMETRY
',
		'80663  -  תורת האינפורמציה  INTRODUCTION to INFORMATION THEORY
',
		'80697  -  תורת המספרים האלמנטרית לתלמידי אודיסיאה  Elementary number theory for Odyssey program
',
		'80756  -  תורת המספרים האלגבריים  ALGEBRAIC NUMBER THEORY
',
		'80779  -  תורת הקטגוריות  Category Theory
',
		'80843  -  נושאים בגיאומטריה  Topics in Geometry
',
		'80869  -  אלגבראות לי  LIE ALGEBRAS
',
		'80910  -  דינמיקה חדמימדית  ONE DIMENSIONAL DYNAMICS
',
		'80931  -  נושאים באנליזה גיאומטרית  Topics in Geometric Analysis
',
		'80112  -  מבוא מתמטי לתלמידי כימיה וכדה"א (2)  Mathematical Introduction for Chemistry and Earth Sciences students (2)
',
		'80115  -  תורת המספרים האלמנטרית  Elementary Number Theory
',
		'80126  -  חשבון דיפרנציאלי ואינטגרלי בסיסי  BASIC CALCULUS
',
		'80131  -  חשבון אינפיניטסימלי (1)  INFINITESIMAL CALCULUS (1)
',
		'80133  -  חשבון אינפיניטסימלי 2 לתלמידי מדעי המחשב  Infinitesimal Calculus (2) for Computer Science Students
',
		'80135  -  אלגברה ליניארית (2)  LINEAR ALGEBRA (2)
',
		'80154  -  אלגברה ליניארית לתלמידי הנדסה ומדעים 2  Linear algebra for engineering and science students 2
',
		'80157  -  מתמטיקה שימושית (2)  Mathematical Methods II
',
		'80181  -  מתמטיקה דיסקרטית  DISCRETE MATHEMATICS
',
		'80312  -  הסתברות ושימושיה  PROBABILITY THEORY AND APPLICATIONS
',
		'80315  -  חשבון אינפיניטסימלי מתקדם (1)  ADVANCED INFINITESIMAL CALCULUS (1)
',
		'80320  -  משוואות דיפרנציאליות  DIFFERENTIAL EQUATIONS
',
		'80420  -  תורת ההסתברות (1)  PROBABILITY THEORY (1)
',
		'80424  -  לוגיקה מתמטית (2)  MATHEMATICAL LOGIC (2)
',
		'80430  -  מבוא להסתברות וסטטיסטיקה  Introduction to Probability and Statistics
',
		'80446  -  מבנים אלגבריים (2)  ALGEBRAIC STRUCTURES (2)
',
		'80517  -  תורת המידה  MEASURE THEORY
',
		'80520  -  קומבינטוריקה  COMBINATORICS
',
		'80599  -  מושגי יסוד באלגברה קומוטטיבית וגיאומטריה אלגברית  FUNDAMENTAL CONCEPTS IN COMMUTATIVE ALGEBRA AND ALGEBRAIC GEOMETRY
',
		'80601  -  מושגי יסוד באנליזה ספקטרלית  FUNDAMENTAL CONCEPTS IN SPECTRAL ANALYSIS
',
		'80608  -  מושגי יסוד בגאומטריה דיפרנציאלית  FUNDAMENTAL CONCEPTS IN DIFFERENTIAL GEOMETRY
',
		'80449  -  גיאומטריה קומבינטורית  Combinatorial geometry
',
		'80578  -  קשיחות של גרפים  Framework rigidity
',
		'80612  -  נושאים באנליזה  Topics in Analysis
',
		'80640  -  תורת מספרים ושדות של פונקציות  Number theory for function fields
',
		'80717  -  נושאים במבנים אלגבריים  Topics in algebraic structures
',
		'80744  -  סמינר תוצאות נבחרות בדינמיקה מודרנית א  Selected results in modern dynamics I
',
		'80762  -  שדות מקומיים  Local Fields
',
		'80833  -  גיאומטריה רימנית של חבורות דיפאומורפיזמים  Riemannian geometry of diffeomorphism groups
',
		'80841  -  סמינר מחקר: משוואות דיפרנציאליות חלקיות  PARTIAL DIFFERENTIAL EQUATIONS
',
		'80870  -  סמינר מחקר: חבורות ודינמיקה  Groups and Dynamics
',
		'80872  -  סמינר מחקר: טופולוגיה וגאומטריה  TOPOLOGY AND GEOMETRY
',
		'80877  -  נושאים באלגברה  TOPICS IN ALGEBRA
',
		'80889  -  סמינר מחקר: אלגברה  RESEARCH SEMINAR IN ALGEBRA
',
		'80906  -  סמינר מחקר: קמירות וקומבינטוריקה  RESEARCH SEMINAR IN CONVEXITY AND COMBINATORICS
',
		'80916  -  סמינר מחקר בלוגיקה ב  Logic Seminar2
',
		'80918  -  סמינר מחקר: מושגי יסוד במתמטיקה  BASIC NOTIONS
',
		'80936  -  סמינר בקירובים דיופנטיים  Seminar in Diophantine approximation
',
		'80943  -  נושאים נבחרים בתורת המספרים ובגיאומטריה אלגברית ב  Topics in number theory and algebraic geometry 2
',
		'80977  -  אלומות עם תומך נילפוטנטי  Sheaves with nilpotent support
',
		'80539  -  קורס קריאה במתמטיקה 2 נז  MATHEMATICS READING COURSE  2 CREDITS
',
		'80541  -  קורס קריאה במתמטיקה  3 נ"ז  MATHEMATICS READING COURSE  3 CREDITS
',
		'80788  -  קורס קריאה במתמטיקה  4 נ"ז  MATHEMATICS READING COURSE  4 CREDITS
',
		'80100  -  תרגיל עזר במתמטיקה  MATH. TUTORIAL FOR 1ST. YEAR STUD.
',
		'80800  -  סדנה בהצגת חומרים מתמטיים  WORKSHOP IN MATHEMATICS
',
		'80879  -  סדנה מתקדמת במתמטיקה (2)  WORKSHOP FOR GRADUATE STUDENTS (2)
',
		'77099  -  חשמל ומגנטיות לתלמידי אודיסיאה  Electricity and magnetism for Odyssey program
',
		'77139  -  יותר הוא שונה: מהתנהגות פרט למשברים כלכליים וחברתיים  More is Different: from individual behavior to economic and social crises
',
		'77210  -  אסטרופיסיקה והחיים ביקום א  ASTROPHYSICS AND LIFE IN THE UNIVERSE
',
		'77331  -  מבוא לאסטרופיזיקה תצפיתית  An Introduction to Observational Astrophysics
',
		'77501  -  אסטרופיסיקה וקוסמולוגיה  Astrophysics and Cosmology
',
		'77603  -  פיסיקה גרעינית  Nuclear Physics
',
		'77669  -  חלקיקים אלמנטריים 2  Elementary Particles II
',
		'77728  -  דינמיקה לא לינארית של רצף  NonLinear Dynamics of Continuous Media
',
		'77785  -  שטויות במיץ חשיבה ביקורתית והתמודדות עם מידע  Yeah right...Skeptical thinking for the information age
',
		'77812  -  דינמיקה לא לינארית וכאוס  Non Linear Dynamics And Chaos
',
		'77844  -  תורת המיתרים א  String theory A
',
		'77902  -  פיזיקה, המח ורצון חופשי  Physics, Brain and Free Will
',
		'77916  -  תורת השדות ב  Quantum Field Theory II
',
		'77961  -  מצב מעובה ב: תופעות קולקטיביות  Solid State Physics B: Collective Phenomena
',
		'77990  -  מבוא לתורת החבורות בפיסיקה  Introduction to Group Theory in Physics
',
		'77101  -  מכניקה ויחסות פרטית  Mechanics and Special relativity
',
		'77106  -  חשמל ומגנטיות קורס קיץ  ELECTRICITY AND MAGNETISM
',
		'77131  -  פיסיקה כללית  גלים וחשמל לתלמידי כימיה וכדה"א  General Phys. Waves & Elec. for Chem.& Earth stu.
',
		'77134  -  חשמל, מגנטיות וגלים למדעים  Electricity, magnetism and waves 2
',
		'77303  -  מכניקה אנליטית  Analytical Mechanics
',
		'77307  -  מבוא לפיסיקה סטטיסטית  Intro. to Statistical Physics
',
		'77315  -  מבוא לפיסיקה חישובית  Introduction to Computational Physics
',
		'77324  -  גאומטריה וטופולוגיה במכניקה קוונטית וקלאסית  Geometry and topology in Quantum and Classical Mechanics
',
		'77542  -  תורת הקוונטים (3)  Quantum Theory C
',
		'77605  -  תורת הקוונטים (2)  Quantum Theory II
',
		'77607  -  מבוא לפיזיקה לא לינארית  Introduction to Nonlinear Physics
',
		'77662  -  ביופיסיקה  Biophysics
',
		'77712  -  אסטרופיסיקה מתקדם: קוסמולוגיה וגלקסיות  Advanced astrophysics: Cosmology and Galaxies
',
		'77800  -  תורת הקוונטים מתקדם א  Advanced Quantum Theory 1
',
		'77856  -  חלקיקים אלמנטריים  Elementary Particles
',
		'77909  -  יחסות וגרביטציה  Relativity and Gravitation
',
		'77960  -  מצב מעובה א  אלקטרונים ופונונים בסריג מחזורי  Condensed matter A  electrons and phonons in periodic lattice
',
		'77964  -  פיסיקה גרעינית א  Nuclear physics A
',
		'77518  -  סמינר בפיסיקה ניסויית של הכוח החלש  Experimental Electroweak Physics
',
		'77634  -  פיסיקה סביבתית  המדע של שינויי האקלים  Environmental Physics The science of climate change
',
		'77640  -  פיסיקה סטטיסטית של למידה וזיכרון  Statistical Physics of learning and Memory
',
		'77646  -  תופעות פיסיקליות בהתפרצויות נובה  Physical phenomena in Novae eruptions
',
		'77696  -  אינטראקציה של אור וחומר  Lightmatter Interactions
',
		'77874  -  דינמיקה לא לינארית במערכות ביולוגיות  Non linear Dynamics in Biological Systems
',
		'77090  -  מעבדה בפיסיקה  מכניקה לתלמידי אודיסיאה  Physics lab | Mechanics lab for Odyssey program
',
		'77335  -  מעבדה ב1 גלים, מערכות דינאמיות ותכונות חומרים  Physics Lab II1Waves, dynamical systems and materials properties
',
		'77103  -  מעבדה א: מכניקה, חשמל ומגנטיות  Physics Lab A: Mechanics, Electricity and Magnetism
',
		'77125  -  מעבדה חלקית בפיסיקה א למדעים מדוייקים, מדכה"א, כימיה ומדעי המחשב  Physics parcial lab A Exact Sciences, earth science, chemistry and computer science
',
		'77320  -  מבוא לאלקטרוניקה א  אנלוגי  Introduction to Electronics A  Analogical
',
		'77508  -  מעבדה ג: ניסויים מתקדמים בפיסיקה קוונטית ומודרנית  Physics Lab III: Advanced experiments in quantum and modern physics
',
		'77635  -  פרוייקט מחקרי בפיסיקה  Research Project
',
		'82612  -  אנרגיה וסביבה  Energy and the Environment
',
		'82657  -  כימיה אטמוספירית  Atmospheric Chemistry
',
		'82858  -  שיטות סטטיסטיות ליישומים במדעי כדוה"א  Statistical methods for Earth sciences
',
		'82892  -  קלימטולוגיה סינופטית של מזה"ת וישראל  Synoptic Climatology of the EM and Israel
',
		'82301  -  דינמיקה של אטמוספרה  DYNAMIC METEOROLOGY
',
		'82309  -  מעברי קרינה באטמוספירה  RADIATIVE TRANSFER IN THE ATMOSPHERE
',
		'82515  -  מבוא למטאורולוגיה טרופית  Introduction to tropical meteorology
',
		'82833  -  שיטות מתמטיות במודלים מדעיים  MATEMATICAL METHODS IN SCIENTIFIC MODELS
',
		'82830  -  סמינריון לתלמידי מוסמך במדעי האטמוספירה ואוקיינוגרפיה 1  SEMINAR FOR GRADUATE STUDENTS
',
		'82853  -  סמינריון לתלמידי מוסמך במדעי האטמוספרה ואוקיינוגרפיה 2  Seminar for Graduate Students in Atmospheric Sciences and Oceanography II
',
		'74443  -  עבודת גמר בלימודי מוסמך  M.SC THESIS
',
		'76701  -  הכרת הפלנקטון  RED SEA PLANKTON
',
		'76703  -  זמן,תזמון ושעונים ביולוגיים במערכות אקוואטיות  Periodicity and Rhythmicity in Marine Ecosystems
',
		'76713  -  ביולוגיה ואקולוגיה של עשבי ים במפרץ אילת  Biology and Ecology of Seagrasses in the Gulf of Eilat
',
		'76716  -  מיקרוביולוגיה ימית  Marine Microbiology
',
		'76733  -  ננו מזרקים במדוזות ואלמוגים  מע הזרקה בת 007 מיליון שנה  The NanoInjection System of Cnidaria
',
		'74442  -  בחינה מסכמת בלימודי מוסמך  FINAL M.SC EXAMINATION
',
		'76246  -  סדנא במדע בסיסי לתלמידי אמירים  WORKSHOP FOR AMIRIM STUDENT
',
		'76250  -  פרוייקט גמר אמירים  AMIRIM PROJECT
',
		'69199  -  ננו טכנולוגיה בשירות האדם  Nano Technology in Service of Humanity
',
		'69506  -  דיפוסיה ותהליכים סטוכסטיים בכימיה וביולוגיה  DIFFUSION AND STOCHASTIC PROCESSES IN CHEMISTRY AND BIOLOGY
',
		'69603  -  מבוא למחקר רבתחומי  Introduction to multidisciplinary research
',
		'69609  -  תורת פונקציונל הצפיפות  DENSITY FUNCTIONAL THEORY
',
		'69617  -  כימיה ביולוגית של חומרים  BIOLOGICAL CHEMISTRY OF MATERIALS
',
		'69640  -  שיטות דיאגרמטיות רב  חלקיקיות בכימיה  Diagrammatic ManyParticle Methods in Chemistry
',
		'69667  -  כימיה אורגנית ג  ORGANIC CHEMISTRY C
',
		'69681  -  שיטות אנליטיות מתקדמות לניטור תהליכים כימיים  INSTRUMENTAL METHODS IN ENVIRONMENTAL SC.
',
		'69704  -  תרמודינמיקה סטטיסטית ושימושיה ב  APPLICATIONS OF STATISTICAL THERMODYNAMICS B
',
		'69710  -  שכבות ננומטריות  NANOMETRIC LAYERS
',
		'69834  -  שיטות מתמטיות בכימיה  MATHEMATICS METHODS IN CHEMISTRY (5)
',
		'69841  -  בקרה של נזק בחלבונים  ממולקולות לתהליכי מחלה  Protein damage control  from molecule to disease
',
		'69900  -  עקרונות מדע הפולימרים  PRINCIPLES OF POLYMERS SCIENCE
',
		'69951  -  כימיה  אתגר ההצלחה  Chemistry The challenge of success
',
		'69994  -  תכנית לתואר כפול  האוניברסיטה העברית  פרוגה  Double Degree Prog. HUJI  PERUGA
',
		'69106  -  כימיה אנליטית א  ANALYTICAL CHEMISTRY A
',
		'69118  -  כימיה אורגנית לתלמידי מדעים ביורפואיים  Organic Chemistry BioMedical Sciences.
',
		'69123  -  כימיה פיסיקלית לתלמידי ביולוגיה  PHYSICAL CHEMISTRY FOR BIOLOGY STUDENTS
',
		'69132  -  כימיה כללית למדעים ביורפואיים ולכדור הארץ  General Chemistry For BioMedicalSciences and Earth Sciences
',
		'69163  -  כימיה פיסיקלית א  PHYSICAL CHEMISTRY A
',
		'69167  -  כימיה פיסיקלית לתלמידי רוקחות ומדכה"א  PHYSICAL CHEMISTRY FOR PHARMACY & EARTH SCIENCES
',
		'69301  -  כימיה פיסיקלית ב  תרמודינמיקה א  PHYSICAL CHEMISTRY B
',
		'69311  -  מבוא לקשר כימי  INTRODUCTION TO THE CHEMICAL BOND
',
		'69503  -  אלקטרוכימיה  ELECTROCHEMISTRY
',
		'69601  -  כימיה פיסיקלית ג  PHYSICAL CHEMISTRY C
',
		'69625  -  עקרונות של כימיה ירוקה  CONCEPTS OF GREEN & SUSTAINABLE CHEMISTRY
',
		'69674  -  כימיה פיסיקלית של ננוחומרים  PHYSICAL CHEMISTRY OF NAN0MATERIALS
',
		'69814  -  תקשורת מדעית  SCIENTIFIC COMMUNICATION
',
		'69922  -  מבוא לספקטרוסקופיה  INTRODUCTION TO SPECTROSCOPY
',
		'69327  -  סמינריון שנה ב לתלמידי אתגר (חלק א)  SEMINAR IN CHEMISTRY  HONORS PROGRAM (Part A)
',
		'69550  -  אופקים בכימיה  סמינריון מחקר לתלמידי בוגר  SEMINAR RESEARCH FOR BSC STUDENTS
',
		'69702  -  סמינר מחקר בכימיה (ביו) אורגנית לתלמידי מוסמך  Bioorganic Chemistry Research Seminar for MSC Students
',
		'69880  -  סמינריון מוסמך  שנה א  M.Sc. Seminar  First Year
',
		'69991  -  סמינריון למוסמך  שנה ב  SEMINAR FOR M.SC. STUDENTS  SECOND YEAR
',
		'69102  -  מעבדה בכימיה כללית לתלמידי התכנית המשולבת במדעים מדוייקים  GENERAL CHEMISTRY LAB FOR THE PHYS. SCIE. PROG.
',
		'69117  -  מעבדה בכימיה כללית ואנליטית  ANALYTICAL AND GENERAL CHEMISTRY LAB
',
		'69173  -  מעבדה ביסודות הכימיה לתלמידי ביולוגיה ומדעי הסביבה  GENERAL CHEMISTRY LAB FOR BIOLOGY AND ENVIRONMENTAL STUDIES STUDENTS
',
		'69313  -  מעבדה בכימיה פיסיקלית  PHYSICAL CHEMISTRY LAB
',
		'69321  -  שיטות בכימיה אורגנית לתלמידי כימיה ביולוגיה  ORGANIC CHEM LAB FOR CHEM & BIO COMBINED PROGRAM
',
		'69331  -  שיטות בכימיה אורגנית  המשך  ORGANIC CHEMISTRY LAB
',
		'69611  -  מעבדה בכימיה של חומרים  CHEMISTRY OF MATERIALS  LAB
',
		'69866  -  ניסוי לתלמידי מוסמך  LAB PROJECT FOR M.SC. STUDENTS
',
		'69902  -  שיטות אפיון וננופבריקציה  CHARACTERIZATION AND NANOFABRICATION WORKSHOP
',
		'69303  -  כימיה אי אורגנית  INORGANIC CHEMISTRY
',
		'72737  -  סמינריון מודרך כימיה ביולוגיה שנה א  Guided seminar chemistrybiology 1st year
',
		'72126  -  מבוא לביולוגיה של האורגניזם (מצומצם)  Introduction to Biology and Evolution of Organisms
',
		'72156  -  מבוא לגנטיקה (מצומצם)  INT. TO GENETICS  HONORS PROG.
',
		'72340  -  ביולוגיה של התפתחות עוברית  Biology of Embryonic Development
',
		'72362  -  מבוא למיקרוביולוגיה  שיעור  INT. TO MICROBIOLOGY  HONORS PROG.
',
		'72542  -  סמינריון מחקרי במדעי החיים סמסטר ב  : Research seminar in life sciences  semester B
',
		'72605  -  צומח וצמחיית ישראל  VEGETATATION AND FLORA OF ISRAEL
',
		'72665  -  אימונולוגיה  IMMUNOLOGY
',
		'72753  -  סמינריון מוסמך במדעי החיים  Life Sciences Graduates Seminar
',
		'72927  -  סמינר בוגר בביופיסיקה שנה א  Biophysics Undergradduate Seminar (first year)
',
		'72938  -  פרוייקט מחקרי בביופיסיקה  Research Project in Biophysics
',
		'72956  -  מפגש מודרך: השלמה לתלמידי "אמירים" עם פסיכוביולוגיה או אתגר  Guided research for Amirimpsychobiology and AmirimEtgar students
',
		'72120  -  ביוכימיה של התא  BIOCHEMISTRY OF THE CELL
',
		'72131  -  אתגרים בגנטיקה  GENETICS LAB  HONORS PROG.
',
		'72154  -  מבוא לפיסיקה לתלמידי ביולוגיה חישובית  Introductory course in Physics for biology students
',
		'72301  -  מבוא להסתברות וסטטיסטיקה  Introduction to probability and statistics
',
		'72332  -  ביולוגיה מולקולרית  MOLECULAR BIOLOGY
',
		'72343  -  פיזיולוגיה של מערכת העצבים  Nervous system physiology
',
		'72363  -  מבוא לפיסיולוגיה (מצומצם)  INTRODUCTION TO PHYSIOLOGY
',
		'72373  -  ביולוגיה של התא מורחב  CELL BIOLOGY
',
		'72604  -  אקולוגיה מורחב  ECOLOGY  ADVANCED LEVEL
',
		'72639  -  צמחים בשרות האדם  PLANTS IN THE SERVICE OF MAN
',
		'72140  -  סמינריון מודרך לתלמידי תכנית אתגר שנה א  GUIDED SEMINAR  HONORS PROG.
',
		'72520  -  סמינריון בוגר: אבולוציה, אקולוגיה והתנהגות  UNDERGRADUATE SEMINAR: EVOLUTION, SYSTEMATICS, E
',
		'72522  -  סמינריון בוגר: ביולוגיה תאית והתפתחותית  UNDERGRADUATE SEMINAR: CELLULAR AND MOLECULAR BI
',
		'72525  -  סמינריון בוגר: ביוכימיה מבנית ומולקולרית  SEMINAR: STRUCTURAL AND MOLECULAR BIOCHEMISTRY
',
		'72539  -  סמינריון בוגר: פסיכוביולוגיה  UNDERGRADUATE RESEARCH SEMINAR IN PSYCHOBIOLOGY
',
		'72110  -  מבוא לביולוגיה של האורגניזם  מעבדה  FROM CELL TO ORGANISM  LAB
',
		'72128  -  מבוא לביולוגיה של האורגניזם  Introduction to Biology and Evolution of Organisms
',
		'72345  -  גנטיקה מורחב  TOPICS IN CLASSICAL AND MOLECULAR GENETICS
',
		'72356  -  מעבדה בביוכימיה לתלמידי ביולוגיה  Biochemistry lab for 2nd year
',
		'72940  -  שיטות מתקדמות בביולוגיה מולקולרית  Advancrd Methods in Molecular Biology
',
		'72329  -  מפגש מודרך עם המחקר הביולוגי  GUIDED PROJECT IN BIOLOGICAL RESEARCH
',
		'72398  -  מפגש מודרך עם המחקר הביולוגי לתלמידי פסיכוביולוגיה  GUIDED RESEARCH FOR PSYCHOBIOLOGY STTUDENTS
',
		'72336  -  מבוא לפיסיולוגיה  INTRODUCTION TO PHYSIOLOGY
',
		'72623  -  אקולוגיה, אבולוציה והתנהגות של עופות  Ecology, Evolution and Behavior of birds
',
		'93880  -  ביולוגיה של אברוני האנרגיה בתא  Biology of the Energy Producing Organelles
',
		'86899  -  ביולוגיה תאית של חיידקים גורמי מחלות  Cell Biology of hostbacteria lpathogen interaction
',
		'90708  -  אבולוציה והתפתחות (evodevo)  Evolution and Development (evodevo)
',
		'88180  -  סקס  sex
',
		'88819  -  תאי גזע ושיבוט  Stem Cells and Cloning
',
		'88882  -  הפרדת פאזות וקונדנסטים במדעי החיים  Condensates and Phase Separation in Biology
',
		'88893  -  מבוא לביולוגיה מערכתית  Introducation to Systems Biology
',
		'88890  -  סמינריון בגנטיקה לתלמידי מוסמך שנה א  GRADUATE SEMINAR IN GENETICS A
',
		'78867  -  מדעי המח מהקלאסי למודרני  From Classic to Contemporary Neuroscience
',
		'78844  -  סמינריון מוסמך במדעי המח וההתנהגות לתלמידי שנה ב  GRADUATE SEMINAR IN BRAIN SCIENCES & BEHAVIOR for 2nd year students
',
		'92632  -  ייצור חלבונים: מאקדמיה לשימוש תראפי  Protein Production from Academic to Therapy
',
		'92987  -  עקרונות קיפול חלבונים  Principles of Protein Folding
',
		'93904  -  מנגנוני פעולה של תרופות  Mechanisms of Drug Action
',
		'92849  -  ניתוח מבני חלבונים למטרות מחקר ניסיוני  STRUCTURAL ANALYSIS OF PROTEIN STRUCTURES
',
		'92619  -  קביעת מבנה חלבונים בעזרת NMR  PROTEIN STRUCTURE DETERMINATION BY NMR
',
		'90604  -  סמינריון סגל ומוסמך באקולוגיה אבולוציה והתנהגות  TOPICS IN ECOLOGY  GRADUATE SEMINAR
',
		'90470  -  מודלים באקולוגיה ובאבולוציה  Models in Ecology and Evolution
',
		'68804  -  שיטות שדה בהידרולוגיה של מי תהום  field method in groundwater hydrology
',
		'70311  -  מבוא לגאוכימיה  INTRODUCTION TO GEOCHEMISTRY
',
		'70316  -  גאולוגיה של ארץישראל  THE GEOLOGY OF ISRAEL
',
		'70515  -  משאבי המים בישראל  WATER RESOURCES OF ISRAEL
',
		'70543  -  רעידות אדמה וסיכונים סייסמיים  EARTHQUAKES AND SEISMIC HAZARD
',
		'70657  -  המים בישראל  Water in Israel
',
		'70821  -  גאולוגיה של הרביעון  לים המלח  QUATERNARY GEOLOGY  To Dead Sea
',
		'70920  -  מבוא לסייסמולוגיה  Introduction to Seismology
',
		'70930  -  חימום גלובלי: ממדע למדיניות  Global warming:from science to policy
',
		'70334  -  גאוכימיה של איזוטופים רדיואקטיביים  GEOCHEMISTRY OF RADIOACTIVE ISOTOPES
',
		'70365  -  מבוא לסטרטיגרפיה  Introduction to stratigraphy
',
		'70511  -  מבוא לG.I.S  Introduction to G.I.S
',
		'70701  -  מבוא לגאופיסיקה  FOUNDATIONS OF GEOPHYSICS
',
		'70865  -  שיטות נומריות במדעי כדור הארץ  Numerical Methods in the Earth Sciences
',
		'70691  -  סמינריון לתלמידי בוגר בגאולוגיה  B.SC. STUDENTS SEMINAR IN GEOLOGY
',
		'70855  -  סמינר מתקדם בגיאוכימיה  Advanced geochemistry seminar
',
		'70102  -  מבוא לפלאונטולוגיה  INTRODUCTION TO PALEONTOLOGY
',
		'70417  -  מינרלים סלעים  MINERALS AND ROCKS
',
		'70547  -  סיור וולקניזם גולןגליל  Volcanism in the Golan and Galilee
',
		'70721  -  סיור הרי יהודה  JUDEA MOUNTAINS  FIELD TRIP
',
		'70317  -  מחקר מודרך לתלמידי בוגר במדעי כדור הארץ מצומצם  Guided Research for Undergraduates in Earth Sciences
',
		'70110  -  מחנה לימוד קיץ  SUMMER FIELD CAMP
',
		'70619  -  התפתחות התשתית הפריקמברית של ישראל  מצומצם  סיור  Precambrian crustal evolution in Eilat  excursion
',
		'70712  -  תרמודינמיקה ותהליכים טיבעיים  THERMODYNAMICS OF NATURAL PROCESSES
',
		'89505  -  סביבה בעולם משתנה  Environment in a changing world
',
		'89777  -  מיקרוביולוגיה סביבתית  ENVIRONMENTAL MICROBIOLOGY
',
		'89309  -  מבוא למדעי הסביבה  INTRODUCTION TO ENVIORONMENTAL SCIENCES
',
		'89520  -  התמודדות מיקרואורגניזמים עם סביבתם  INTERREL. BETWEEN MICROORG. & THEIR ENVIRONMENT
',
		'89788  -  גאוכימיה אורגנית  Organic geochemistry
',
		'89301  -  מים וסביבה  Water and the Environment
',
		'84840  -  מחנה לימוד גיאולוגיה וגיאופיזיקה של החוף  Campus in coastal geology and gephysics
',
		'84827  -  מאמרים קלאסיים במדעי כדור הארץ  CLASSIC PAPERS IN EARTH SCIENCES
',
		'84000  -  שיטות מחקר באוקיינוגרפיה  RESEARCH METHODS IN OCEANOGRAPHY
',
		'84865  -  מבוא לאוקיינוגרפיה מעשית  Introduction to practical oceanography
',
		'68105  -  מבוא לתורת האקלים  INTRODUCTION TO CLIMATE
',
		'68128  -  מבוא למיפוי גאולוגי  Introduction to geological mapping
',
		'76223  -  קורס ממוחשב בבטיחות  שנה ב  computer based safety training2
',
		'76411  -  הכרת משאבי הספרייה לתלמידי החוג למתמטיקה  קורס מתוקשב  INFORMATION & LIBRARY RESOURCES FOR MATH. STUD.
',
		'76413  -  הכרת משאבי הספרייה לתלמידי החוג לכימיה  קורס מתוקשב  INFORMATION & LIBRARY RESOURCES FOR CHEM. STUD.
',
		'76415  -  הכרת משאבי הספרייה לתלמידי החוג למדעי כדור הארץ  קורס מתוקשב  INFORMATION & LIBRARY RESOURCES FOR EARTH SCI. S
',
		'76417  -  הכרת משאבי הספריה לתלמידי תיכון  INFORMATION & LIBRARY RESOURCES HIGH SCHOOL STUDENTS
',
		'76420  -  הגשת עבודה באיחור  PAPER IN DELAY
',
		'76422  -  הגשת עבודה באיחור  delay paper
',
		'76452  -  הגשת עבודה באיחור  delay paper
',
		'73534  -  ביוטכנולוגיה בחקלאות  BIOTECHNOLOGY AGRICULTURE
',
		'94709  -  ביולוגיה עתירת נתונים  שיטות ועיבוד ביואינפורמטי של המידע  High Throughput Biology  Methods and Bioinformatic Analysis of the Data
',
		'94707  -  סמינריון בביוטכנולוגיה  BIOTECHNOLOGY SEMINAR
'
];
HUJI_courses_lists['הפקולטה למשפטים'] = 
[
		'62021  -  כתיבה אקדמית באנגלית  Academic Writing in English
',
		'62081  -  מבוא לשיטת המשפט בישראל  Introduction to Israeli Law
',
		'62103  -  מבוא לצדק מעברי  Introduction to Transitional Justice
',
		'62108  -  שיטות מחקר  Research Methods
',
		'62110  -  דיני חוקה  CONSTITUTIONAL LAW
',
		'62114  -  דיני עונשין  CRIMINAL LAW
',
		'62116  -  תורת המשפט ב: פילוסופיה של המשפט  Jurisprudence II: Philosophy of law
',
		'62119  -  תורת המשפט ב: פילוסופיה של המשפט  Jurisprudence II: Philosophy of law
',
		'62129  -  דיני פטנטים של ארצותהברית  US PATENT LAW
',
		'62169  -  זכויות אדם וטריטוריה  HUMAN RIGHTS AND THE LAW OF TERRITORY
',
		'62206  -  שיטות ומסורות משפט  LEGAL SYSTEMS, LEGAL TRADITIONS
',
		'62216  -  יסודות הבוררות הביןלאומית הלכה למעשה  Foundations of International Arbitration Law and Practice
',
		'62229  -  גיוס הון ומימוש השקעות בחברות הייטק  FINANCING AND EXITS IN HIGH TECH COMPANIES
',
		'62257  -  שיטות ומסורות משפט  LEGAL SYSTEMS, LEGAL TRADITIONS
',
		'62279  -  התנהגות שיפוטית  Judicial Behavior
',
		'62299  -  חקיקה וחינוך ככלים לשינוי חברתי  Legislation and education as tools for social change
',
		'62301  -  דיני חוזים  LAW OF CONTRACTS
',
		'62303  -  דיון אזרחי  CIVIL PROCEDURE
',
		'62306  -  דיון פלילי  CRIMINAL PROCEDURE
',
		'62316  -  דיני קניין  PROPERTY LAW
',
		'62323  -  דת וזכויות אדם בראי הקולנוע  Religion and Human Rights through the Lens of Film
',
		'62330  -  דיון אזרחי  CIVIL PROCEDURE
',
		'62340  -  זכויות אדם והחברה הישראלית  HUMAN RIGHTS AND ISRAELI SOCIETY
',
		'62351  -  בין חרדיות לישראליות  Between Harediism and Israeliism
',
		'62375  -  כלכלה התנהגותית והמשפט  Behavioral Law and Economics
',
		'62403  -  מבוא להגבלים עסקיים  Introduction to Antitrust Law
',
		'62410  -  זכויות אדם במשפט הביןלאומי  INTERNATIONAL HUMAN RIGHTS LAW
',
		'62437  -  מבוא לסטטיסטיקה  INTRODUCTION TO STATISTICS
',
		'62450  -  משפחה, רכוש וממון  PROPERTY LAW WITHIN THE FAMILY
',
		'62457  -  דיני מקורות אנרגיה דלק וגז  International Energy Law
',
		'62473  -  זכויות חברתיות במשפט העברי  SOCIAL RIGHTS IN JEWISH LAW
',
		'62483  -  משפט חוקתי בארצות הברית  US Constitutional Law
',
		'62501  -  משפט רומי  INTRODUCTION TO ROMAN LAW
',
		'62516  -  משפטים בספרות  Law in Literature
',
		'62532  -  הסדרה ביןלאומית של סחר והשקעות  INTERNATIONAL REGULATION OF TRADE AND INVESTMENT
',
		'62553  -  סוגיות בדיני בוררות  Chapters in Arbitration Law
',
		'62575  -  כשרות משפטית במשפט האזרחי בישראל  Legal Capacity in Civil Israeli Law
',
		'62596  -  מבוא למשפט קונטיננטלי  Introduction to Civil Law
',
		'62604  -  דיני קניין  PROPERTY LAW
',
		'62611  -  דיני תאגידים  LAW OF CORPORATIONS
',
		'62613  -  מבוא למשפט אמריקאי  INTRODUCTION TO AMERICAN LAW
',
		'62622  -  מיסוי חברות ושותפויות  Entity Taxation
',
		'62624  -  צבא וביטחון במשפט הישראלי  סוגיות נבחרות  The Military and Security in Israel Law
',
		'62634  -  דיני ראיות  LAW OF EVIDENCE
',
		'62646  -  מבוא למשפט סיני  Introduction to Chinese Law
',
		'62656  -  משפט ומגדר  GENDER AND LAW
',
		'62702  -  משפט ביןלאומי פרטי  PRIVATE INTERNATIONAL LAW
',
		'62705  -  אתיקה מקצועית של עורכי דין  LAWYERS ETHICS
',
		'62714  -  דיני קניין רוחני  INTELLECTUAL PROPERTY LAW
',
		'62728  -  דיני עבודה  LABOUR LAW
',
		'62769  -  דיני מיסים  LAW OF TAXATION
',
		'62791  -  דיני נזיקין  LAW OF TORTS
',
		'62804  -  תאוריה ומחקר משפטי למוסמך  Legal Theory and Research of law for LL.M
',
		'62822  -  משפט וחברה  Law And Society
',
		'62828  -  דיני פטנטים  PATENT LAW
',
		'62852  -  משפט פרלמנט ודמוקרטיה  Parliamentary Democracy and Law
',
		'62864  -  משפט, ספרות וזכויות אדם  Law, literature and human rights
',
		'62886  -  מרחבים משפטיים מקומיים: שכונות וקהילות במשפט  Micro Legal Spaces: The Law of Neighbourhoods and Communities
',
		'62890  -  סוגיות במשפט הפרטי בראי המשפט העברי והמשפט הישראלי  Topics in Private Law in light of Jewish and Israeli Law
',
		'62893  -  המשגת הציבור בדין הרבני המוקדם  Concepts of the Collective in Early Rabbinic Law
',
		'62903  -  שיטות מחקר  RESEARCH METHODS
',
		'62906  -  חקר הרשעות שווא  Wrongful Convictions
',
		'62914  -  משפט חוקתי השוואתי  Comparative Constitutional Law
',
		'62918  -  המשפט הסיני: משפט וכלכלה בסין  Law and the Economy in China
',
		'62920  -  משפט וחברה  Law and Society
',
		'62957  -  לכל מקום יש שם ולכל שם יש סיפור  צדק וכבוד במרחב הציבורי: עיון מחודש בשמות מקומות בירושלים בראיה פו  Every place has a name and every name has a story  Justice and respect in the public domain: Cultur
',
		'62965  -  משפט משווה  COMPARATIVE LAW
',
		'62102  -  מבוא למשפט עברי  INTRODUCTION TO JEWISH LAW
',
		'62304  -  דיון פלילי  CRIMINAL PROCEDURE
',
		'62404  -  מבוא למשפט ישראלי לדוברי ערבית  Introduction for Israeli law for Arabic speakers
',
		'62643  -  משפט ביןלאומי פומבי  PUBLIC INTERNATIONAL LAW
',
		'62308  -  סוגיות במשפט ההשוואתי הדתי והפוזיטיבי הישראלי  Topics in religious and Israeli Comparative Law
',
		'62517  -  עבודה סמינריונית בהדרכה אישית  Seminar Paper
',
		'62529  -  רגולציה כלכלית  Economic Regulation
',
		'62577  -  בין משפט פלילי ומשפט מנהלי: עבירות רגולטוריות ואכיפה מנהלית  Regulatory Offenses/Administrative Sanctions
',
		'62580  -  יהודים, פלסטינים וישראל: שלוש היסטוריוגרפיות, תורות מוסר וחוקות  Israel: Three Moralities and Constitutions
',
		'62593  -  משפט, מדיניות ציבורית, וכלכלה התנהגותית  Law, Policy, and Behavioral Economics
',
		'62607  -  הממשלה: היבטים במשפט ומימשל  Government and Governance
',
		'62610  -  דילמות ראייתיות מפרספקטיבה ביןתחומית  Evidentiary Dilemmas: An Interdisciplinary Perspective
',
		'62625  -  המשפחה: היבטים רכושיים  Financial Aspects of Family Law
',
		'62648  -  ממשל תאגידי ושוק ההון בישראל  Corporate Governance and the Capital Market in Israel
',
		'62659  -  ההליך כמערכת יחסים  PROCEDURE AS RELATIONSHIP
',
		'62670  -  הכלכלה הפוליטית של המשפט הביןלאומי  The Political Economy of International Law
',
		'62697  -  סוגיות מתקדמות בדיני מיסים  Advansed tax law Issues
',
		'62718  -  דיני חדלות פרעון ואכיפת חיובים  Insolvency and Enforcement Law
',
		'62731  -  תולדות הקודיפיקציות המשפטיות: מהעת העתיקה ועד להצעת חוק דיני ממונות  Legal Codification: From Ancient Times through to the Proposed Codex of Israeli Civil Law
',
		'62752  -  סוגיות מתקדמות בקנין רוחני  Advanced Topics in Intellectual Property
',
		'62771  -  ביקורת שיפוטית: היבטים השוואתיים ותיאורטיים  Judicial Review: Theoretical and Comparative Aspects
',
		'62795  -  סוגיות מתקדמות בדיני עונשין  Advanced topics in criminal law
',
		'62810  -  אתיקה, משפט ורפואה  Ethics, Medicine and the Law
',
		'62818  -  תורות ענישה  The philosophy of punishment
',
		'62866  -  האחריות בנזיקין  Remedies & Liability
',
		'62898  -  שחקנים לא מדינתיים במשפט הביןלאומי  Non State Actors in International Law
',
		'62912  -  המשפט הבינלאומי של הגירה ומהגרים  International Law of Migration and Refugees
',
		'62999  -  סמינריון  השלמת חובות משנים קודמות  COMPLETION OF PREVIOUS ACADEMIC REQUIREMENTS
',
		'62276  -  סדנה במשפט, כלכלה ומחקרים אמפיריים של המשפט ב  Workshop in Law and EconomicsB
',
		'62293  -  מאקדמיה לפרקטיקה  עשרת הדיברות של הליטיגטור באולם בית משפט  From academy to practice the Ten Commandments for a courtroom litigator
',
		'62315  -  גישור ויישוב סכסוכים  MEDIATION & ADR
',
		'62373  -  קרקעות, תכנון ובניה ושימור בירושלים היבטים מעשיים של צדק מעברי  LANDSTOWN PLANING AND PRESERVATION IN JERUSALEM
',
		'62393  -  ניהול משברים  Crisis Management
',
		'62442  -  ניהול ההליך הפלילי  Litigating Criminal Cases
',
		'62467  -  סדנה מעשית בתכנון ובניה  PLANNING AND ZONING LAWS  WORKSHOP
',
		'62479  -  סדנת משפט מבוים  Moot Court workshop
',
		'62533  -  תחרות במשפט ביןלאומי הומניטרי  INTERNATIONAL HUMANITARIAN LAW COMPETITION
',
		'62562  -  סדנה מתקדמת במשפט עברי  ADVANCED WORKSHOP IN JEWISH LAW
',
		'62569  -  סדנת ניהול משא ומתן לעסקאות ביןלאומיות  International Transactions Workshop
',
		'62628  -  סדנה במשפט ציבורי וזכויות אדם  WORKSHOP IN PUBLIC LAW AND HUMAN RIGHTS
',
		'62649  -  סדנה בדיני מיסים  WORKSHOP IN TAX LAW
',
		'62669  -  סדנה במשפט ביןלאומי  INTERNATIONAL LAW WORKSHOP
',
		'62700  -  סדנה אינטרדיסציפלינרית למכפיל  Interdiciplinary Workshop for MACHPIL
',
		'62834  -  חברות במערכת כתב העת "משפטים"  THE EDITORIAL BOARD, MISHPATIM LAW REVIEW
',
		'62836  -  חברות במערכת כתב העת Review Law Israel  MEMBER OF THE EDITORIAL BOARD, ISRAEL LAW REVIEW
',
		'62838  -  חברות במערכת כתב העת "חוקים"  EDITORIAL BOARD, HUKIM JOURNAL ON LEGISLATION
',
		'62874  -  חברות במערכת כתב העת "חוקים" המשך  EDITORIAL BOARD, HUKIM JOURNAL ON LEGISLATION Continue
',
		'62900  -  קריאה אקדמית: כיתות אמן  ACADEMIC READING: MASTER CLASS
',
		'62951  -  חברות במערכת של "שנתון המשפט העברי"  THE EDITORIAL BOARD, SHENATON HAMISHPAT HAIVRI
',
		'62989  -  תחרות משפט מבוים במשפט עברי בשיתוף עם אוניברסיטאות: תלאביב, וינה, מוסקבה וקרדוזו (YU)  Jewish Law Moot Court
',
		'62994  -  סדנת דוקטורנטים וחוקרים צעירים  DOCTORAL STUDENTS & JUNIOR RESEARCHERS WORKSHOP
',
		'62352  -  קליניקה לזכויות בני נוער וצעירים במצבי סיכון (בשמה הקודם: הקליניקה לזכויות ילדים ונוער)  Rights of Youth at Risk Clinic
',
		'62368  -  הקליניקה לזכויות אדם בינלאומיות  INTERNATIONAL HUMAN RIGHTS CLINIC
',
		'62394  -  קליניקת החפות  Wrongful Convictions Clinic
',
		'62396  -  הקליניקה לזכויות בהליך הפלילי  THE CRIMINAL JUSTICE CLINIC
',
		'61050  -  הטיות בשיקול הדעת במערכת אכיפת החוק  cognitive biases in the law enforcement system
',
		'61053  -  כתיבה אקדמית לתלמידי מוסמך  משטרת ישראל  Academic Writing for M.A students
',
		'61057  -  פנולוגיה : תאוריה ומדיניות  Correctional Theory and Policy
',
		'61059  -  מיומנויות במשא ומתן וביישוב סכסוכים  Negotiation and Conflict Resolution Skills
',
		'61061  -  שיטור ואכיפה בחברה שסועה  Policing and Law Enforcement in Divided Societies
',
		'61102  -  מבוא לקרימינולוגיה בראי מדעי החברה  פסיכולוגיה  Introduction to Criminology as a Social Science  psychology
',
		'61104  -  קרימינולוגיה וזכויות אדם  CRIMINOLOGY AND HUMAN RIGHTS
',
		'61106  -  פשיעה ושימוש לטובה/לרעה בסמים  Drug use/Misuse and Crime
',
		'61110  -  פשיעה ומקום  crime & place
',
		'61113  -  התעללות והזנחת קטינים היבטים קרימינולוגים, משפטיים וטיפוליים  Child maltreatment criminological, legal and therapeutic aspects
',
		'61202  -  שיטות מחקר בקרימינולוגיה  Research methods in Criminology
',
		'61204  -  מבוא למשפט וחברה  law and society
',
		'61206  -  יסודות המדע הפורנזי לקרימינולוגים  Basic Aspects in Forensic Science for Criminologists
',
		'61211  -  פשעי מין: מאפיינים ייחודיים  Sex crimes  unique characteristics
',
		'61213  -  פשעי צווארון לבן  white Collar Crime
',
		'61308  -  קרימינולוגיה וגלובליזציה  criminology and globalization
',
		'61637  -  חקירת התנהגויות וסיטואציות אלימות באמצעות וידאו  The study of violent situations and violent behaviors by videos
',
		'61770  -  מערכות תקון בישראל טיפול ושיקום עבריינים  correction & rehabilitation in israel
',
		'61774  -  קשיים מובנים בטיפול במכורים בארץ  STRUCTURED DIFFICULTIES IN HANDLING DRUG MISUSE
',
		'61795  -  חקירת התנהגויות וסיטואציות אלימות באמצעות וידאו  קיץ  The study of violent situations and violent behaviors by videos
',
		'61805  -  מושגי יסוד במשפט הפלילי  א"ח ופורנזי  Criminal Law
',
		'61807  -  כתיבה אקדמית  אכיפת חוק, מסלול עיוני, ומדע פורנזי עיוני  ACADEMIC READING IN CRIMINOLOGY FOR THEORETICAL TRACKS
',
		'61816  -  קרימינולוגיה ומגדר  CRIMINOLOGY & GENDER
',
		'61823  -  קרימינולוגיה וסייבר  CyberCriminology
',
		'61840  -  בין אקדמיה לשדה: מחקר איכותני בקרימינולוגיה  Between Academia and the Field: Qualitative Research in Criminology
',
		'61855  -  סדר דין פלילי ודיני ראיות  א"ח ופורנזי  Law of Criminal Procedure and Evidence
',
		'61878  -  תיאוריות מתקדמות בקרימינולוגיה  ADVANCED THEORES IN CRIMINOLOGY
',
		'61913  -  מבוא למדעים ושיטות אנליטיות במדע פורנזי (כימיה)  Introduction to sciences and analytical methods in forensic sciences (chemistry)
',
		'61915  -  סוגיות במדע פורנזי : היבטים אינטגרטיביים  Concepts of Forensic Science
',
		'61927  -  יישום העונש תיאוריה ומדיניות  Punishment Administration: Theory and policy
',
		'61798  -  יישום שיטות סטטיסטיות מתקדמות בקרימינולוגיה א  ADVANCED APPLIED STSTISTICS IN CRIMINOLOGY A
',
		'61880  -  יישום שיטות סטטיסטיות מתקדמות בקרימינולוגיה ב  ADVANCED APPLEID STATISTICS IN CRIMINOLOGY B
',
		'61055  -  סמינר בנושא שיטור טרור  Policing Terror Seminar
',
		'61302  -  עבריינות נוער  Juvenile delinquency
',
		'61304  -  סטייה חברתית, עבריינות תנועה ותאונות דרכים  Social deviance, traffic violations, and road traffic accidents
',
		'61306  -  סוגיות עכשוויות בקרימינולוגיה ובמדיניות אכיפת החוק  Contemporary Issues in Criminology and Criminal Justice Policy
',
		'61313  -  "על חם"  חקירה אמפירית מיקרוהתנהגותיתגופנית של פשעים שתועדו בווידאו  Caught RedHanded: A MicroBehavioral Approach to Visual Data of Crimes Caught on Camera
',
		'61600  -  דילמות בעיצוב הרגולציה הפלילית  Regulatory challenges of the criminal law
',
		'61804  -  עבודה סמינריונית במסלול אכיפת החוק  SEMINAR PAPER
',
		'61905  -  להיות אישה עבריינית: מקורבנות לעבריינות  To be a criminal woman: from victim to offender
',
		'61772  -  סוגיות בשיטור בחברה דמוקרטית  ASPECTS OF POLICING IN A DEMOCRATIC SOCIETY
',
		'61907  -  זכויות אדם וענישה  HUMAN RIGHTS AND PUNISHMENT
',
		'61310  -  סדנה לתלמידים מצטיינים  Workshop for Excellent Students
',
		'61729  -  סדנא לעבודות גמר  ב  WORKSHOP FOR MA THESIS  B
',
		'61818  -  פרוייקט בנושא אכיפת חוק  LAW ENFORCEMENT PROJECT
',
		'61917  -  פרוייקט בנושא מדע פורנזי  Forensic Science project
',
		'62020  -  משפט ביןלאומי פומבי למוסמך  PUBLIC INTRNATIONAL LAW FOR LLM STUDIES
',
		'62080  -  סוגיות מתקדמות בדיני חברות  Advanced Topics in Corporate Law
',
		'62197  -  דיני חוזים למוסמך  ADVANCED CONTRACT LAW
',
		'62071  -  עבודה סמינריונית בהדרכה אישית  SEMINAR PAPER
',
		'61011  -  מבוא לשיטור  Introduction to Policing
',
		'61018  -  משפחה ועבריינות  Family and delinquency
',
		'61023  -  אוריינות אקדמית  מ"י  Academic Literacy Skills
',
		'61002  -  מבוא למערכת אכיפת החוק  Introduction to Criminal Justice System
',
		'61004  -  שיטות מחקר בקרימינולוגיה  Research Methods in Criminology
',
		'61007  -  מבוא למדע פורנזי  Introduction to Forensic Science
',
		'61009  -  שיטור מבוסס ראיות  EvidenceBased Policing
',
		'61021  -  גישות ותאוריות בסיסיות בקרימינולוגיה  Basic Theories in Criminology
',
		'61014  -  אסטרטגיות שיטור  Policing Strategies
',
		'61016  -  פשיעה, מדיה ואינטרנט  Crime Media and the Internet
'
];
HUJI_courses_lists['הפקולטה לרפואה'] = 
[
		'96122  -  קידום פעילות גופנית , תזונה ובריאות  Physical Activity and health promotion
',
		'96125  -  להתאמן, לאכול, לחיות  Eat, Move, Live,  Healthy living and Body maintenance
',
		'96200  -  בטיחות שנה ב  .
',
		'96232  -  הרופא כדמות מפתח לאיתור וטיפול בילדים נפגעי התעללות והזנחה  ידע וכלים מעשיים  The Physician as a key figure in identifying and treating maltreated children
',
		'96234  -  מבוא לביואתיקה  Introduction to bioethics
',
		'96236  -  פיזיולוגיה במצבי קיצון  Physiology under extreme conditions
',
		'96300  -  בטיחות שנה ג  .
',
		'96317  -  בינה מלאכותית שימושית  Applied Artificial Intelligence
',
		'96330  -  סוגיות מתקדמות ברפואה והלכה  Advanced Issues In Medical Ethics
',
		'96332  -  מבוא ליזמות ביו רפואית  Introduction to biomedical initiatives
',
		'96334  -  הפרעות פסיכיאטריות: מהבטים קליניים לבסיס גנטי מולקולרי  Psychiatric Disorders: From clinical aspects to molecular  genetic basis
',
		'96337  -  חשיפה למחקרים בפקולטה לרפואה  Scientific research in the faculty of medicine
',
		'96342  -  רגש והבעה  אופרה כחוויה מזככת  EMOTIONS IN MUSIC: OPERA AS A PURIFYING EXPERIM
',
		'96344  -  החוקי, האתי, האנושי  סוגיות רפואיות בהלכה  The legal, the ethical and the humane medical issues in the Jewish law
',
		'96346  -  בריאות וחולי ללא מדע מודרני  על מחלות, רפואה ציבורית, שמרנות ויצירתיות בעולם הישן  Health and illness before modern science  diseases, public medicine, conservatism and creativity in
',
		'96348  -  אתיקה רפואית בראי הקולנוע  Medical ethics
',
		'96350  -  המניע הנסתרמחלות והיסטוריה  Disease culture and history
',
		'96352  -  בין השראה לקללה: חולי ורפואה בראי הספרות  Between Curse and Inspiration: Illness and Medicine in Literature
',
		'96354  -  מערכת החיסון הטוב, הרע והניתן לשנוי ולשיפור  The immune system  The good, the bad and how it can be modified and improved
',
		'96402  -  מבוא לרפואה קלינית שנה ד חלק ב  Introduction to Clinical Medicine 4th year Part B
',
		'96502  -  רפואה פליאטיבית וטיפול בסוף החיים  Palliative Care and EndofLife Treatment
',
		'96112  -  סטטיסטיקה לתלמידי רפואה ורפואת שיניים  STATISTICS
',
		'96114  -  ביולוגיה של התא  Biology of the Cell
',
		'96205  -  אנדוקרינולוגיה  תקשורת בין רקמות  Endocrinology and Reproduction
',
		'96311  -  סרטן  Cancer
',
		'96325  -  רפואה חישובית  חלק א  Computational medicine  Part A
',
		'96219  -  מעבדות היסטולוגיה  Histology laboratories
',
		'96213  -  מיקרוביולוגיה רפואית  Medical Microbiology
',
		'96303  -  מערכת העיכול והכבד של האדם החולה  The sick patient: diseases of the gastrointestinal tract and the liver
',
		'96309  -  אנדוקרינולוגיה  מחלות  endocrinology disease states
',
		'96599  -  הדרכה וליווי שנים קליניות שנה v  mentoring
',
		'96310  -  למידה מבוססת בעיות PBL  שנה ג  Problembased learning  PBL  Third year
',
		'96002  -  פורטפוליו (תלקיט) לשנה ב  Portfolio  2d year
',
		'96210  -  למידה מבוססת בעיות PBL  שנה ב,למידה מבוססת בעיות PBL  שנה ב  Problembased learning  PBL  second year,Problembased learning  PBL  second year
',
		'96449  -  מבוא לרפואת טראומה צבאית  INTRODUCTION TO MILITARY TRAUMA
',
		'96836  -  מבוא למחלות זיהומיות שנה ו  Introduction to clinical diseases
',
		'96116  -  מבוא לגוף האדם הבריא  Introduction to the Healthy Human Body
',
		'96207  -  מערכת העצבים של האדם הבריא  The nervous system of the healthy person
',
		'96308  -  המטולוגיה של האדם הבריא והחולה  The hematology of the healthy and sick person
',
		'96131  -  פתולוגיה שנה ו  Pathology
',
		'96410  -  פנימית  שנה ד  INTERNAL MEDICINE  FOURTH YEAR
',
		'96430  -  כירורגיה  שנה ד  SURGERY  FOURTH YEAR
',
		'96447  -  רפואת משפחה לתלמידי צמרת  שנה ד  FAMILY MEDICINE for Tzameret students
',
		'96450  -  גריאטריה  שנה ד  GERIATRICS
',
		'96504  -  מבוא לפסיכיאטריה קורס מקוון  Introduction to Psychiatry Online Course
',
		'96506  -  מבוא לאורתופדיה קורס מקוון  Introduction to Orthopedic Online Course
',
		'96508  -  מבוא לאונקולוגיה קורס מקוון  Introduction to Oncology Online Course
',
		'96511  -  פסיכיאטריה  שנה ה בחינת גמר ארצית  PSYCHIATRY FIFTH YEAR FINAL EXAM
',
		'96513  -  נוירולוגיה נוירוכירוגיה שנה ה בחינת גמר  NEUROLOGY FIFTH YEAR FINAL EXAM
',
		'96520  -  אורתופדיה  שנה ה  ORTHOPEDICSFIFTH YEAR
',
		'96522  -  הרדמה  שנה ה  ANASTHETICS FIFTH YEAR
',
		'96524  -  אונקולוגיה  שנה ה  ONCOLOGY  FIFTH YEAR
',
		'96839  -  מחלקה פנימית  שנה ו  INTERNAL MEDICINE  SIX YEAR
',
		'96841  -  גסטרואנטרולוגיה  שנה ו  GASTROENTEROLOGY  SIX YEAR
',
		'96843  -  אונקולוגיה  שנה ו  ONCOLOGY  SIX YEAR
',
		'96846  -  נפרולוגיה  שנה ו  NEPHROLOGY  SIX YEAR
',
		'96848  -  קרדיולוגיה  שנה ו  CARDIOLOGY  SIX YEAR
',
		'96850  -  עור  שנה ו  DERMATOLOGY  SIX YEAR
',
		'96852  -  כירורגיה פלסטית  שנה ו  PLASTIC SURGERY  SIX YEAR
',
		'96854  -  כירורגית ילדים  שנה ו  PEDIATRICS SURGERY  SIX YEAR
',
		'96856  -  כירורגית לב חזה  שנה ו  CARDIOTHORATIC SURGERY  SIX YEAR
',
		'96858  -  רפואה דחופה שנה ו  EMERGENCY ROOM MEDICINE  SIX YEAR
',
		'96860  -  רוטציה ניתוחית  Surgical rotation
',
		'96862  -  א.א.ג.  שנה ו  OTORHINOLARYNGOLOGY  SIX YEAR
',
		'96864  -  גנטיקה קלינית שנה ו  Clinical Genetics
',
		'96866  -  המטואונקולוגית ילדים  שנה ו  Pediatric HematoOncology
',
		'96868  -  נוירולוגיה שנה ו  Neurology
',
		'96870  -  רפואה גרעינית שנה ו  Nuclear medicine
',
		'96872  -  טיפול נמרץ שנה ו  Intensive care
',
		'96874  -  נוירוכירורגיה שנה ו  Neurosrgery
',
		'96876  -  גינקולוגיה שנה ו  GYNECOLOGY SIX YEAR
',
		'96878  -  הרדמה שנה ו  Anasthetics 6 year
',
		'96882  -  רפואת משפחה אלקטיב שנה ו  Electiv family medicine 6 year
',
		'96884  -  קרדיולוגית ילדים שנה ו  Childs cardiology 6 year
',
		'96887  -  אלקטיב חוץ כירורגי שנה ו  e
',
		'96890  -  אלקטיב מחקרי שנה ו  elective research  six year
',
		'96892  -  טיפול נמרץ כירורגיה  שנה ו  Surgery intensive care
',
		'96500  -  הצעת עבודת גמר  MD THESIS PROPOSAL
',
		'96911  -  בחינת גמר ארצית בכירורגיה  שנה ו  SURGERY  SIX YEAR  FINAL EXAM
',
		'96920  -  בחינה ליד מיטת החולה שנה ו  PRACTICAL CLINIC EXAM
',
		'81803  -  אימונולוגיה תאית ומולקולרית: פרקים נבחרים  Cellular, Molecular Immunology: Selected Issues
',
		'81809  -  התא מבנה ותפקוד 1  Cellular Structure and Function 1
',
		'81850  -  ביולוגיה מולקולרית  Molecular Biology
',
		'81860  -  התא מבנה ותפקוד2  Cellular Structure and Function2
',
		'81880  -  ביולוגיה מולקולרית מצומצם  Molecular Biology
',
		'94112  -  הכרות עם מחקרי דגש גנטיקה וגנומיקה  An Overview of the Research in the Genetics and Genome Track
',
		'94114  -  הכרות עם מחקרי דגש סרטן ומחלות מטבוליות  An Overview of the Research in the Cancer and Metabolic Diseases Track
',
		'94124  -  ביו יזמות וניהול סטארטאפ בתחום מדעי החיים מבוא  BioEntrepreneurship and Management in the Life Sciences sector
',
		'94405  -  המערכת האימונית בבריאות וחולי  The Immune System in Health and Disease
',
		'94614  -  הכרות עם מחקרי דגש מיקרואורגניזמים ומערכת החיסון  An Overview of the Research in Microorganisms and Immune System Track
',
		'94616  -  אינטראקציה של חיידקים עם המאכסן  Interactions of bacteria with host cells
',
		'94619  -  מיקרוביולוגיה  Microbiology
',
		'94624  -  אימונולוגיה למדעים ביו רפואיים  Immunology for BioMedical Students
',
		'94631  -  הגידול הסרטני ומאפייניו  Hallmarks of cancer
',
		'94638  -  נגיפים זואונוטים ונגיפי קורונה  Zoonotic Viruses and Corona Viruses
',
		'94645  -  מנגנונים עצביים של תפקידי מח מורכבים  Neuronal Mechanisms Underlying Complex Brain Functions
',
		'94657  -  בעקבות מדענים ומחקרים פורצי דרך בביורפואה לתלמידי תכנית אביש פרנקל  Inspiring Scientists and Breakthroughs in Biomedicine Abisch Frenkel Prog.
',
		'94682  -  עקרונות בפרמקולוגיה לתלמידי מדעים ביו רפואיים  Principles in Pharmacology
',
		'94694  -  מבוא לביולוגיה מערכתית של אורגניזמים רב תאיים  Systems Biology of Multicellular Organisms
',
		'94810  -  שימוש אתי בחיות מעבדה במדעים הביורפואיים  Ethical Use Of Laboratory Animals In Biomed. Sci
',
		'94813  -  רפואה ביהדות  Medicine in Judaism
',
		'94837  -  פיתוח רעיונות וטכנולוגיות חדשות  Development of New Concepts and Technologies
',
		'94846  -  דימות רפואי מתקדם ומחקרי  Advanced Medical Imaging and Research
',
		'94859  -  מנגנונים מולקולריים של העברה סינפטית  Molecular Mechanisms of synaptic Transmission
',
		'94875  -  מחקרים קליניים מבית החיות לבית החולים  Clinical Trials from animals to humans
',
		'94924  -  אולטרה סאונד באבחון טרום לידתי  SONOGRAM AS A TOOL FOR PARENTAL DIAGNOSIS
',
		'94932  -  פרוייקט מחקרי בייעוץ גנטי  Research project in Genetic counselling
',
		'98813  -  נוירופסיכיאטריה של העצמי בבריאות ובחולי  Neuropsychiatry of the self in health and disease
',
		'98827  -  פרקים נבחרים במדעי הנוירולוגיה: אספקטים בסיסיים וקליניים  Highlights of Neurological Sciences: Basic & Clinical
',
		'94510  -  מבוא לביואינפורמטיקה מורחב  Introduction to Bioinformatics
',
		'94607  -  סטטיסטיקה למדעים ביורפואיים  Statistics for Bio Medical Sciences
',
		'94683  -  סדנה לכתיבה מדעית והצגת עבודות מדעיות בפני קהל לתלמידי PHD  Scientific writing and Presentation workshop for PhD Students
',
		'94873  -  עיבוד וניתוח ממוחשב של מידע עצבי בעזרת מטלב  Analysis of Neruonal Data using MATLAB
',
		'81839  -  סמינר המחלקה למיקרוביולוגיה וביולוגיה מולקולרית  Microbiology and Molecular Biology Departmental Seminar
',
		'81892  -  חיסוניות מוטבעת: תאים דנדריטים  Antigen Presenting Cells: Dentritic Cells
',
		'94311  -  סמינר המחלקה לביוכימיה וביולוגיה מולקולרית  Biochemistry and Molecular Biology Departmental Seminar
',
		'94313  -  סמינר המחלקה לביולוגיה התפתחותית וחקר הסרטן  Developmental Biology and Cancer Research Departmental Seminar
',
		'94652  -  סמינריון בוגר דגש מיקרואורגניזמים ומערכת חיסון  BSc seminar Microorganisms and immune system
',
		'94654  -  סמינריון בוגר דגש גנטיקה וגנומיקה  BSc Seminar Genetics and Genomics
',
		'94860  -  קריאה ביקורתית של עבודות מדעיות: סמינר מוסמך לתלמידי המגמה שנה א  Critical evaluation of scientific works
',
		'94925  -  סמינריון בגנטיקה של האדםא  Human Genetics SeminarA
',
		'81815  -  מודלים גנטיים בבע"ח למחלות ותכונות אנושיות  Genetic Animals Models of Human Diseases and Conditions
',
		'81864  -  ביוטכנולוגיה ומדעי הסביבה  Biotechnology & Environment Sciences
',
		'94621  -  פרקים נבחרים בביוכימיה  ממחקר בסיסי להשלכות רפואיות  Studies In Biochemistry
',
		'94809  -  היבטים גנטיים של תהליך ההתמרה הסרטנית  Genetic Aspects of Neoplastic Transformation
',
		'94858  -  סינדרום מטבולי  Metabolic Syndrome
',
		'98121  -  עקרונות הדמיה מגנטית עצבית  Principles of Magnetic Resonance NeuroImaging
',
		'98817  -  מערכת העצבים המוטורית  תפקוד, ויסות ובקרה  Neurons & Networks in the Mammalian Motor System
',
		'81820  -  מרשתות למולקולות: גישות ניסויות וחישוביות לחקר קשרים בין חלבוניםמעבדה  From Networks To Molecules:Laboratory
',
		'94623  -  מיקרוביולוגיהמעבדה  Microbiologylab
',
		'94862  -  קורס סבב לתלמידי D.hP/DM  Rotation course for MD/Ph.D students
',
		'94612  -  מבוא לאנטומיה של האדם לתלמידי מדעים ביורפואיים  Introduction To Human Anatomy
',
		'94641  -  התנסות מעבדתית גנטיקה וגנומיקה  Experience in a research lab genetics and genomics
',
		'94644  -  התנסות מעבדתית חקר המח  Experience in a research lab brain research
',
		'94674  -  שיטות נבחרות בגנטיקה ובביוכימיה של חלבונים  Selected Methods in Genetics and Protein Biochemistry
',
		'94912  -  שונות גנומית ודנ"א קדמוני בחקר מוצא האוכלוסיות  GENOME DIVERSITY & ANCIENT DNA
',
		'94686  -  בטיחות שנה ב מדב"ר  Safety for second year students
',
		'94602  -  מיומנויות חברתיות למדעיניות/ים צעירות/ים  Social & Communication Skills for Successful Young Scientists
',
		'94856  -  ניהול זמן בין רפואה למחקר לתלמידי MDPHD  Time Management Medicine and Research MDPHD students
',
		'94919  -  סדנת הכשרה למתן ייעוץ גנטי  GENETIC COUNCELING  WORKSHOP
',
		'81852  -  עיבוד ממוחשב וויזואליזציה של מידע ביולוגי ורפואי  Computerized Analysis Visualization of Biologica
',
		'94668  -  ביוכימיה : החומר התורשתי והתבטאותו  BiochemistryGene structure & expression
',
		'94684  -  כלים חישוביים ומאגרי מידע לשדרוג המחקר הביולוגי חיזוי פונציה של גנים, רשתות ביולוגיות והשפעת מוטצ  WebBased Analysis Tools From Gene mutations & networks to Gene Function
',
		'94863  -  העין ומערכת הראיה  The eye and the visual system
',
		'98406  -  ארגון ומינהל : שרותי בריאות הציבור  PUB. HEALTH SERVICES: PLANNING AND ORGANIZATION
',
		'98408  -  היבטים סוציולוגיים של בריאות וחולי  SOCIAL ASPECTS OF HEALTH AND DISEASE
',
		'98415  -  בריאות האם והילד  MOTHER AND CHILD HEALTH CARE (MCH)
',
		'98427  -  תכנות שמוש בתכנית ס.פ.ס.ס  USE OF S.P.S.S.
',
		'98430  -  אפידמיולוגיה ושיטות מחקר  1  Epidemiology and research methods1
',
		'98443  -  אפידמיולוגיה של סרטן  EPIDEMIOLOGY OF CANCER
',
		'98450  -  אפידמיולוגיה גנטית  GENETIC EPIDEMIOLOGY
',
		'98464  -  גנומיקה אישית  Personal Genomics
',
		'98475  -  יסודות השיווק למקצועות הרפואה  BASIS OF MARKETING FOR THE MEDICAL PROFFESSION
',
		'98478  -  שיטות מחקר איכותניות בתחומי הבריאות ובריאות הציבור  QUALITATIVE METHODS IN HEALTH AND PUBLIC HEALTH
',
		'98482  -  קידום בריאות  HEALTH PROMOTION
',
		'98486  -  אפידמיולוגיה של מחלות מדבקות  INFECTIOUS DISEASES EPIDEMIOLOGY
',
		'98529  -  היבטים משפטיים בבריאות הציבור  LEGAL ASPECTS OF PUBLIC HEALTH
',
		'98807  -  אתיקה בבריאות הציבור  Public Health Ethics
',
		'98424  -  שיטות סטטיסטיות בבריאות הציבור  STATISTICAL METHODS FOR PUBLIC HEALTH
',
		'98448  -  רגרסיה לוגיסטית  LOGISTIC REGRESSION
',
		'98481  -  ניסויים קליניים  CLINICAL TRIALS
',
		'98806  -  כלכלת בריאות  HEALTH ECONOMICS
',
		'98437  -  פגישות מחקר לדיון על עבודות גמר בבריאות הציבור  RESEARCH FORUM FOR DISCUSSION OF DISSERT.
',
		'98815  -  מבחן סופי ללימודי MPH  MPH  FINAL EXAM
',
		'91107  -  מיקרוביולוגיה ,אימונולוגיה ווירולוגיה  MICROBIOLOGY,IMMUNOLOGY AND VIROLOGY
',
		'91115  -  תזונה לתלמידי סיעוד  NUTRITION
',
		'91401  -  ניהול הטיפול הסיעודי הכוללני  NURSING
',
		'91416  -  מבוא לאורינות אקדמית  Introduction to Academic Literacy
',
		'91422  -  סיעוד המטופל הסובל מליקויים במערכת האורולוגית והנפרולוגית  NURSING THE PATIENT WITH KIDNEY AND URINARY SISTEM DISORDERS
',
		'91425  -  סיעוד המטופל עם הפרעות בתפיסת החושים (6)  NURSING PATIENT WITH SENSORY PROBLEMS
',
		'91432  -  סיעוד הילד המתבגר ומשפחתו  PEDIATRIC NURSING
',
		'91434  -  סיעוד האישה ברצף החיים  nursing of woman (gynecology and obstetrics)
',
		'91438  -  חוק משפט ואתיקה  ETHICS AND LAW IN NURSING
',
		'91441  -  מינהל בסיעוד ומדיניות בריאות  Nursing Management and Health Policy
',
		'91446  -  רפואה וסיעוד בעת השואה ואחריה  MEDICINE AND NURSING IN THE HOLLOCAUST AND ONWARDS
',
		'91715  -  סיעוד בבריאות הקהילה  COMMUNITY HEALTH NURSING
',
		'91102  -  אנטומיה ופיזיולוגיה א  HUMAN ANATOMY AND PHYSIOLOGY
',
		'91140  -  מבוא לפסיכולוגיה  INTRODUCTION TO PSYCHOLOGY
',
		'91145  -  מבוא לכימיה כללית ואורגנית  Introduction to general and organic chemistry
',
		'91412  -  אומדן גופני  PHISICAL ASSESSMENT
',
		'91420  -  סיעוד המטופל עם הפרעות בשחלוף גזים (1)  NURSING PATIENTS WITH PROBLEMS IN OXYGENATION
',
		'91428  -  עזרה ראשונה בסיסית  BASIC FIRST AID
',
		'91430  -  סמינריון בחירה בסיעוד  SEMINAR IN NURSING
',
		'91437  -  תקשורת  בוננות  INTERPERSONAL SKILLS
',
		'91120  -  פרמקולוגיה ב  PHARMACOLOGY b
',
		'91124  -  הוראה קלינית בבריאות הנפש  Clinical Nursing  Psychiatry
',
		'91127  -  הוראה קלינית בסיעוד המבוגר 3  Clinical Nursing  Adult Health 3
',
		'91129  -  הוראה קלינית בקהילה 1  Clinical Nursing  Community 1
',
		'91167  -  הוראה קלינית בסיעוד המבוגר 1  CLINICAL EXPERIENCE  ADULT HEALTH 1
',
		'91172  -  הוראה קלינית בחדר מיון  CLINICAL NURSING EMERGENCY ROOM
',
		'99100  -  ראיונות אישיים  interviews
',
		'99103  -  פסיכולוגיה חברתית  SOCIAL PSYCHOLOGY
',
		'99115  -  נוירולוגיה  NEUROLOGY
',
		'99124  -  עקרונות בהנחיית קבוצה בריפוי בעיסוק  PRINCIPLES OF GROUP THERAPY
',
		'99127  -  פסיכיאטריה של הילד והמתבגר  Psychiatry  childhood and adolescents
',
		'99134  -  גריאטריה  הערכה והתערבות בריפוי בעיסוק  Geriatrics  Assessment and intervention in occupational therapy
',
		'99138  -  ילדים  הערכה והתערבות ברב"ע  PEDIATRICS  EVALUATION & INTERVENTION
',
		'99141  -  מודלים קונספטואליים בריפוי בעיסוק  Conceptual models in occupational therapy
',
		'99150  -  הדרכה בעבודה מדעית בריפוי בעיסוק  ACADEMIC WRITING
',
		'99153  -  טכנולוגיה מסייעת בריפוי בעיסוק  ASSISTIVE TECHNOLOGY IN OCCUPATIONAL THERAPY
',
		'99163  -  סוציולוגיה של בריאות וחולי  Sociology of health and sickness
',
		'99165  -  עקרונות הפיזיולוגיה  חלק ב  Human physiology  Part B
',
		'99726  -  מיומנויות תקשורת קליניות והקשר הטיפולי בריפוי בעיסוק  Clinical communication skills in occupational therapy
',
		'99729  -  אורטופדיה רפואה ושיקום בריפוי בעיסוק  Orthopedic medicine and rehabilitation in occupational therapy
',
		'99736  -  סביבה חברתית: קהילה ומשפחת המטופל  Social Environment: Community and the clients family
',
		'99113  -  מבוא לסטטיסטיקה  INTRODUCTION TO STATISTICS
',
		'99105  -  אנטומיה של האדם  HUMAN ANATOMY
',
		'99732  -  הכשרה קלינית שלישית והדרכה אישית  Third clinical placement & supervision
',
		'99737  -  הכשרה קלינית ראשונה והדרכה אישית  First Clinical placement & supervision
',
		'99145  -  מודעות עצמית באמצעות אומנות  Personal awareness through Art
',
		'99175  -  מודעות עצמית באמצעות מוסיקה  Personal awareness through music
',
		'99180  -  התפתחות אישית מקצועית אימון קשיבות  Personal professional development  mindfulness
',
		'99149  -  ניתוח פעילות מבוסס עיסוק  Occupation Based Activity Analysis
',
		'99738  -  יסודות התערבות א  foundations for occupational therapy  Stage 1
',
		'91667  -  הוראה קלינית בסיעוד המבוגר 1  CLINICAL EXPERIENCE  ADULT HEALTH 1
',
		'91610  -  הוראה קלינית בילדים  Clinical Nursing  Pediatrics
',
		'91613  -  הוראה קלינית בבריאות הנפש  Clinical Nursing  PSYCHIATRY
',
		'91656  -  הוראה קלינית בסיעוד המבוגר 2  CLINICAL NURSING  ADULT HEALTH 2
',
		'91901  -  הוראה קלינית בסיעוד המבוגר 3  Clinical Nursing  Adult Health
',
		'91911  -  הוראה קלינית בסיעוד האשה  Clinical Nursing  Obstetrics Gynecology
',
		'91923  -  הוראה קלינית בקהילה  CLINICAL NURSING  Community
',
		'91952  -  הוראה קלינית בסיעוד המבוגר 2  clinical experience  adult health 2
',
		'91972  -  הוראה קלינית בחדר מיון  CLINICAL EXPERIENCE EMERGENCY ROOM
',
		'94130  -  תקשורת וייעוץ (מורחב)  CONSULTATION AND COMMUNICATION
',
		'94139  -  חינוך לבריאות  HEALTH EDUCATION
',
		'94144  -  תקשורת וייעוץ (מצומצם)  COMMUNICATION & CONSULTATION
',
		'94146  -  קריאת ספרות ביקורתית ברפואה ראשונית  CRITICAL READING IN PRIMARY CARE
',
		'94219  -  גריאטריה  GERIATRY
',
		'94216  -  מעגל חיי המשפחה  FAMILY LIFE CYCLE
',
		'95025  -  ארגון הטיפול הרפואי  Organization of Medical Care
',
		'95142  -  פרקים נבחרים באפידמיולוגיה  Selected Topics in Epidemiology
',
		'95146  -  בריאות העובד והסביבה  Environmental & Occupational Health
',
		'95148  -  שיטות מחקר איכותיות בתחומי הבריאות ובריאות הציבור  Qualitative Methods in Health and Public Health
',
		'95153  -  מבוא לדמוגרפיה  Introduction to Public Health Demography
',
		'95210  -  מבוא לתזונה בבריאות הציבור  Introduction to Public Health Nutrition
',
		'95239  -  עקרונות ושימושים באפידמיולוגיה  Principles & Uses of Epidemiology
',
		'95248  -  כלכלת בריאות  Health Economics
',
		'95258  -  פגישות מחקר לדיון על עבודות גמר  Research Forum for MPH Thesis
',
		'98422  -  בריאות הנפש בקהילה  Community Mental Health
',
		'98805  -  הזדקנות: אפידמיולוגיה ושירותים  Aging: Epidemiology & Services
',
		'95149  -  אתיקה בבריאות הציבור  Public Health Ethics
',
		'95236  -  שיטות סקר ומחקר בבריאות הציבור  Survey & Research Methods in Public Health
',
		'95251  -  סמינר בריאות הציבור וסיורים מקצועיים  Public Health Seminar & Professional Site Visits
',
		'95253  -  סדנא בנושא ניטור והערכה של תכניות בבריאות הציבור  Public Health Monitoring & Evaluation Workshop
',
		'98457  -  מבוא לכלכלה  INTRODUCTION TO ECONOMICS
',
		'64101  -  יסודות הכימיה האנליטית  Fundamentals of Analytical Chemistry
',
		'64104  -  ביולוגיה של האדם  INTRODUCTION TO CELL BIOLOGY
',
		'64310  -  פיזיולוגיה של האדם  HUMAN PHYSIOLOGY
',
		'64327  -  כימיה ביואורגנית ואנליזה ספקטרלית  BioOrganic Chemistry and Spectral Analysis
',
		'64624  -  מבוא להנדסה  Introduction to Engineering
',
		'64635  -  ביוכימיה, מטבוליזם וביואנרגטיקה  BIOCHEMISTRY, METABOLISM AND BIOENERGETICS
',
		'64637  -  ביולוגיה ושימושים רפואיים של מערכות שחרור תאיות  Biology and medical uses of cellular release systems
',
		'64644  -  ביולוגיה מולקולרית לרוקחים  MOLECULAR BIOLOGY
',
		'64650  -  ביולוגיה של התא וביולוגיה מולקולרית  להסבה ערב  Cell Biology and Molecular Biology
',
		'64652  -  אנטומיה  להסבה ערב  Anatomy
',
		'64760  -  כתיבה מדעית בסיסית  the basics of scientific writing
',
		'64801  -  פרמקוקינטיקה מתקדמת  ADVANCED PHARMACOKINETICS
',
		'64807  -  כימיה ביואורגנומתכתית: ממערכות ביולוגיות ליישומים רפואיים  bioorganometallic chemistry: from biological systems to medicinal applications
',
		'64847  -  אוליגונוקלאוטידים: סינתזה כימית ושימושים ברפואה  Oligonucleotides: Chemical synthesis and medical applications
',
		'64853  -  אנתרופולוגיה משפטית (פורנזית)  Forensic Anthropology
',
		'64874  -  עקרונות בסיסיים בפיתוח תרופות  Drug Development
',
		'64106  -  כימיה אורגנית א  ORGANIC CHEMISTRY A
',
		'64305  -  אנטומיה של האדם  לתלמידי רוקחות  HUMAN ANATOMY  PHARMACY STUDENTS
',
		'64317  -  מדעי הרוקחות  PHARMACEUTICAL SCIENCES
',
		'64627  -  מבוא לכימיה כללית ואורגנית  Introduction to General and Organic Chemistry
',
		'64861  -  פרמקולוגיה ב  Pharmacology B
',
		'64742  -  סמינריון בוגר  ADVANCED PHARMACY  SEMINAR
',
		'64850  -  סמינריון מוסמך  MSc. SEMINAR
',
		'64860  -  ביוסטטיסטיקה במדעי הרוקחות ורוקחות קלינית  BIOSTATISTICS IN PHARMACEUTICS AND CLINICAL PHA
',
		'64886  -  נוירוביולוגיה של התמכרות לסמים  NEUROBIOLOGY OF DRUG ADDICTION
',
		'64851  -  חשיפה למחקר תרופתי  Exposure fot drug research
',
		'64608  -  מיקרוביולוגיה  MICROBIOLOGY
',
		'64616  -  טכנולוגיה רוקחית ב  PHARMACEUTICAL TECHNOLOGIES B
',
		'64127  -  בטיחות לתלמידי שנה ב  Safety for second year students
',
		'64107  -  גשר לאוניברסיטה  A Bridge to the University
',
		'64133  -  שעת מדעי התרופה שנה ב  Time for drug science  Second year
',
		'64135  -  שעת מדעי התרופה שנה ד  Time for drug science  Fourth year
',
		'64140  -  חשיפה למחקר  חטיבה כימיה מדיצינאלית  Research Rotation (Medicinal Chemistry)
',
		'64142  -  חשיפה למחקר  חטיבת פרמקולוגיה  Research Rotation (Pharmacology)
',
		'64319  -  מדיניות וכלכלה רוקחית  Pharmacoeconomics principals & policy
',
		'64726  -  פרמקותרפיה  חלק ב (מצומצם)  PHARMACOTHERAPY  PART B
',
		'64838  -  טרטולוגיה קלינית  CLINICAL TERATOLOGY
',
		'64723  -  ניתוח מידע תרופתי וביוסטטיסטיקה  Drug literature and biostatistics
',
		'64152  -  סמינר מחקר לPHARM D חלק א  Advanced research seminar for Pharm D
',
		'64103  -  סמינריון קליני א  Clinical Seminar 1
',
		'64112  -  מבוא לרפואה קלינית לרוקחים קליניים  Introdution to Medicine for Clinical Pharmacists
',
		'64833  -  טוקסיקולוגיה מתקדמת של תרופות  ADVANCED TOXICOLOGY OF DRUGS
',
		'64115  -  מיומנויות ייעוץ בפרמקותרפיה  השלמה ב  Consulting skills in Pharmacotherapy
',
		'64727  -  התנסות קלינית לתואר בוגר  CLINICAL PHARMACY WORKSHOP
',
		'64110  -  התמחות בפרמקותרפיה ב  Pharmacotherapy skills 2
',
		'64722  -  פרמקותרפיה  חלק א  PHARMACOTHERAPY  PART A
',
		'64725  -  סדנאות התמחות ברוקחות  שנה ד  SPECIALIZATION WORKSHOP IN PHARMACY
',
		'64859  -  מיומנויות בסיסיות ברוקחות קלינית  Basic Skills in Clinical Pharmacy
',
		'64862  -  סדנה ברוקחות קלינית  CLERKSHIP IN CLINICAL PHARMACY
',
		'64113  -  התמחות ברוקחות קלינית בקהילה  Specialization in community clinical pharmacy
',
		'99806  -  נושאים נבחרים בנוירווולנס  SPECIAL TOPICS IN NEUROWELLNESS
',
		'99811  -  קורס מתקדם בשיטות מחקר  ADVANCED COURSE IN RESEARCH APPROACHES
',
		'99818  -  גורמי סביבה (חברתית  תרבותית) בריפוי בעיסוק  Environmental factors (cultural social) aspects in occupational therapy
',
		'99825  -  מבוא לליקויי למידה הפרעת קשב ו  DCD  INTRODUCTION TO LEARNING DISORDERS ATTENTION DIFFICTNES AND DCD
',
		'99846  -  הערכה והתערבות בקרב אוכלוסיה עם קשיים בכתיבה  Assessment and intervention for individuals with handwriting disorders
',
		'99861  -  הערכה והתערבות בתיפקודי חיים בקרב אוכלוסייה עם ליקויי למידה, הפרעות קשב ו  DCD  Assessment and for life skills in the learning disorder attention difficultes and DCD population
',
		'99867  -  קידום בריאות בריפוי בעיסוק  Health promotion in occupational therapy
',
		'99873  -  שיקום מרחוק: בסיס תיאורטי וחשיבה קלינית  Telerehabilitation: theoretical basis and clinical reasoning
',
		'99802  -  סמינריון מתקדם בתיאוריות בריפוי בעיסוק  ADVANCED SEMINAR IN OCCUPATIONAL THERAPY THEORY
',
		'99809  -  מדידה והערכה  חלק ב  MEASUREMENT & EVALUATION  B
',
		'99828  -  סמינר תיזות  THESIS SEMINAR
',
		'99858  -  עבודה סמינריונית בריפוי בעיסוק  SEMINAR IN OCCUPATIONAL THERAPY
',
		'99843  -  פרוייקט במגמת התמחות שלב ב  Project in area of specialty  part II
',
		'93128  -  ניהול מערכות בריאות בעולם משתנה  Health system management in a changing world
',
		'93134  -  אומדן בריאות האשה  womens health assessment
',
		'93114  -  ערוצי תקשורת ודינמיקה ביןאישית בסיעוד ובמקצועות בריאות  COMMUNICATION & INTERPERSONAL DYNAMIC IN NURSING
',
		'93127  -  ניהול הטיפול החולה הכרוני ומשפחתו  Care management of the chronicly ill patient and his family
',
		'93132  -  סמינר תיזה ב  THESIS SEMINAR B
',
		'93136  -  הבסיס המדעי של הסיעוד: תיאוריות, מחקר ועשייה  The scientific basis of nursing: theories, research and practice
',
		'93112  -  אומדן בריאות  HEALTH ASSESSMENT
',
		'93122  -  הטיפול במצבי חולי מורכבים חריפים קריטיים  CARE OF THE ACUTE/ CRITICAL PATIENT
',
		'93130  -  עבודת גמר לתלמידי מוסמך בסיעוד קליני מתקדם  FINAL THESIS
',
		'75354  -  הדרכה לאורח חיים בריא ב  Training for a healthy life style B
',
		'75358  -  מנהיגות צבאית  militry leadership
',
		'75360  -  תכנים עיוניים בפיזיולוגיה ורפואה צבאית  Theoretical content in physiology and military medicine
',
		'75350  -  מבוא לרפואה צבאית  Introduction to Military Medicine
'
];
HUJI_courses_lists['הפקולטה לרפואת שיניים'] = 
[
		'97300  -  התנהלות פיננסית לתלמידי רפואת שיניים  Managing Finances for Dental Students
',
		'97312  -  מבוא לרפואת שיניים קלינית א  INTRODUCTION TO CLINICAL DENTISTRY A
',
		'97339  -  אפידמיולוגיה ומניעה ברפואת שיניים  Dental epidemiology and prevention in dentistry
',
		'97342  -  מדעי ההתנהגות (I)  Behavioral Sciences (I)
',
		'97344  -  מחלות זיהומיות והרחבות במיקרוביולוגיה לתלמידי רפואת שיניים  INFECTIOUS DISEASES AND EXTENDED TOPICS IN MICROBIOLOGY FOR DENTAL MEDICINE STUDENTS
',
		'97348  -  מבוא לכירורגית פה ולסתות  introduction to oral and maxillofacial surgery
',
		'97350  -  המטולוגיה  Hematology for Dental Students
',
		'97352  -  תפקוד בלוטות הרוק בבריאות ובחולי  salivary glands function in health and diseases
',
		'97354  -  מקצוענות, אתיקה וניהול רפואה I  Professionalism , Ethics, and practice management I
',
		'97608  -  ביולוגיה של הפה  ORAL BIOLOGY
',
		'97610  -  ביוכימיה של מחלת הסרטן  Biochemistry of Cancer
',
		'97634  -  נושאים נבחרים במכניקה תאית  Selected topics in cell mechanics
',
		'97636  -  נושאים נבחרים באפיגנטיקה והזדקנות  Selected topics in epigenetics and aging
',
		'97639  -  גנטיקה  Human Genetics
',
		'97645  -  נושאים נבחרים באפשרות ל"מסטל" מיקרובים על ידי קנבינואידים  Selective topics on options of microbes to get "high" with Cannabinoids
',
		'97648  -  נושאים נבחרים במחקרים קליניים ואפידמיולוגיה של מחלות הפה והשיניים  Selected topics in clinical studies end oral and dental epidemiology
',
		'97762  -  כאב פנים ולסתות  שנה ד  Orafacial Pain
',
		'97852  -  מיומנויות יסוד מתקדמות בשיקום  Advanced
',
		'97912  -  פריודונטיה קלינית מתקדמת  Advanced Clinical Periodontics
',
		'97757  -  הכנה לביצוע מחקר קליני ובסיסי  שנה ד  Introduction for Basic & Clinical Research
',
		'97346  -  תכנית מצוינות במחקר ביו רפואי לתלמידי DMD "מעלות"  Maalot Program for Excellence in Biomedical Research for DMD Students
',
		'97903  -  הגשת עבודת גמר שנה ו  Submission of Final Project
',
		'97329  -  מיומנויות יסוד/תח"ק  חלק ב  Basic Skills / Fixed Partial denture  part B
',
		'97729  -  היבטים קליניים וביולוגיים של עששת  CARIES
',
		'97841  -  מיומנויות יסוד/רפואת שיניים משמרת  חלק ב  Basic Skills/Restorative Dentistry  part B
',
		'97310  -  הכנה לחיסונים  Preparation to Immunization
',
		'97319  -  קידום בריאות הפה בקרב אוכלוסיות נזקקות  שנה ה  Dental Medicine in the Community  5th Year
',
		'97332  -  קידום בריאות הפה בקרב אוכלוסיות נזקקות  שנה ב  Oral health promotion for underserved communities  2nd year
',
		'97334  -  בטיחות לתלמידי שנה ב  Safety for second year students
',
		'97865  -  טיפול משולב מבוגרים  פריודונטיה  שנה ה  Comprehensiv Treatment of the Adult Patient  Periodonitcs
',
		'97356  -  פרמקולוגיה ב  Pharmacology for Dental Students  2
',
		'97323  -  שיקום שיניים מחוסרות מוך  Restoration of Endodontic Treated Teeth
',
		'97642  -  מבוא לרפואת שיניים משמרת  Introduction to Restorative Dentistry
',
		'97715  -  מבוא טיפול שיניים לחולה בעל רקע רפואי מורכב  The Dental Management of the Medically Complex Patient part 1
',
		'97718  -  חומרים דנטליים  DENTAL MATERIALS
',
		'97755  -  אנדודונטיה  שנה ד  Endodontics
',
		'97760  -  רפואת הפה קלינית  Clinical Oral Medicine
',
		'97763  -  פריודונטיה שנה ד  חלק ב  Periodontics B
',
		'97834  -  שיקום פנים ולסתות  MAXILLOFACIAL REHABILITATION
',
		'97861  -  שיקום הפה מבוגרים  שנה ה  Prosthodontic care for the adult patient
',
		'97866  -  אורתודונטיה  שנה ה  Orthodontics  5th year
',
		'97868  -  התנסות בפענוח רנטגני  קליני  חלק 2  Practice in Clinical Radiologic interpretation part 2
',
		'97870  -  התנסות קלינית ברפואת הפה  Clinical practice in oral medicine
',
		'97873  -  התנסות קלינית מתקדמת ברפואת הפה  Advanced clinical practice in oral medicine
',
		'97875  -  התנסות קלינית ברפואת שיניים לילדים  Clinical practice in pedodontics
',
		'97878  -  דימות פנים ולסתות  מבוא ושיטות  Oral and Maxillofacial Imaging  theory and techniques
',
		'97882  -  תותבות נשלפות שנה ה  REMOVABLE PROSTHESIS 5th year
',
		'97901  -  רכישת יסודות הקריאה והאבחנה ב CBCT  CBCT reading and diagnosis
',
		'97960  -  שיקום רכסים מחוסרי שיניים  Treatment of the edentulous patient
',
		'97970  -  קורס שתלים מתקדם  Advanced implant course
',
		'97972  -  מקצוענות, אתיקה וניהול רפואי III  Professionalism , Ethics, and practice management III
',
		'97974  -  אורתודונטיה  שנה ו  Orthodontics  6th year
',
		'97976  -  טיפול משולב מבוגרים  אנדודונטיה  שנה ו  Comprehensive treatment of the adult patient  Endodontics 6th year
',
		'97978  -  טיפול משולב מבוגרים  פריודונטיה  שנה ו  Comprehensive treatment of the adult patient  Periodontics 6th year
',
		'97620  -  תורנות בקליניקת סליגמן  Rotaition in students clinic
',
		'97987  -  רפו"ש לילדים  ציון גמר משוקלל  PEDODONTICS  FINAL GRADE
',
		'97991  -  אנדודונטיה  ציון גמר משוקלל  ENDODONTICS  FINAL GRADE
',
		'97994  -  רדיולוגיה אורלית  ציון גמר משוקלל  ORAL RADIOLOGY  FINAL GRADE
',
		'97996  -  כירורגיה  ציון גמר משוקלל  ORAL SURGERY  FINAL GRADE
',
		'97928  -  פרקים נבחרים מחזית המיקרוביולוגיה היום  Selected topics from the front of current microbiology
',
		'97946  -  עקרונות ביומכניקה ויישומם במערכת הקרניופסציאלית  BIOMECH. PRINC. & APPL. IN THE CRANIOFACIAL SYST
',
		'97949  -  קורס לטכנאי תיקון DNA על מסלולים מנגנונים ובקרה  A course for DNA repair handgmen pathways. mechanism and control
',
		'97956  -  מכניקה ותנועה של תאים  Cell mechanics and movements
',
		'97964  -  מגדל השן: "כיתת אומן ב"  Master class B" PhD students of the faculty of Dental Medicine
',
		'97966  -  "מגדל השן ב"  סמינר הפקולטה לרפו"ש  "The Ivory Tower B": The seminar of the Faculty of Dental Medicine
',
		'97985  -  סמינריון חוגי  SEMINAR
',
		'97940  -  פרקים נבחרים: ביולוגיה התפתחותית ברפואה ורפואת שיניים  Research topics in developmental Biology and Dentistry
'
];
HUJI_courses_lists['ביה"ס למנהל העסקים'] = 
[
		'55107  -  יסודות החשבונאות ב  Introduction to Financial Accounting B
',
		'55124  -  מודלים עסקיים באקסל  Business Modelling with Excel
',
		'55322  -  מתימטיקה ב  Mathematics B
',
		'55429  -  טכנולוגיה בישראל  מהמעבדה באקדמיה לפס היצור  Technology in Israel
',
		'55533  -  שיווק דיגיטלי  פרקטיקות גלובליות עם GCMO  Digital Marketing Best Practices with GCMO
',
		'55545  -  מנהיגות בארגונים  Organizational Leadership
',
		'55662  -  תוכנית בינתחומית על חדשנות  תלמידי מינהל עסקים  Trans  Disiplinary Innovation Program  MBA Students
',
		'55665  -  דילמות אתיות במינהל עסקים בעידן המידע  Ethical Dilemmas in Business Management in The Information Age
',
		'55669  -  בלוקציין ומטבעות דיגיטליים  Blockchain and Cryptocurrencies
',
		'55687  -  התנהגות ארגונית  Organizational Behaviour
',
		'55691  -  יזמות בפינטק  Entrepreneurship in FinTech
',
		'55703  -  כריית טקסט וישומים עסקיים  Text Minning for Business Applications
',
		'55716  -  בניית תקציבים וקבלת החלטות פיננסיות בארגון  Strategic Cost Analysis
',
		'55721  -  חידושים פיננסים לפיתוח כלכלי  Financial Innovations
',
		'55723  -  שוק ההון בישראל מאחורי הקלעים ועד לקדמת הבמה  Capital Markets in Israel Behind the Scenes and into the Limelight
',
		'55747  -  אסטרטגיה בשווקים מתעוררים  EMERGING MARKETS STRATEGY
',
		'55756  -  הערכת טכנולוגיית בריאות  HEALTH TECHNOLOGIES ASSESSMENT
',
		'55760  -  דוחות כספיים וניתוח כלכלי  Financial Reporting and Economic Analysis
',
		'55766  -  מימון יזמות  מתקדם  Entrepreneurial Finance
',
		'55772  -  שימוש במודלים של מדעי הטבע להבנת תופעות חברתיות  Using Exact Sciences Modeling Tools to Understand Social Phenomena
',
		'55780  -  סוגיות במימון מיזם ביו רפואי  Topics in Financing of BioMed Startup
',
		'55783  -  בריאות דיגיטלית  Digital Health
',
		'55788  -  טכנולוגיה ועסקים  Technology and Business
',
		'55790  -  מידול פינטק מבוסס נתונים של סיכוני אשראי  fintech analytics credit risk
',
		'55798  -  גופים מוסדיים ושוק ההון  Capital Markets and Institutional Investors
',
		'55801  -  ניהול רכש אסטרטגי  A
',
		'55814  -  יזמות חברתית וניהול מלכ"רים  Social Entrepreneurship OCIAL
',
		'55820  -  יצירתיות וחדשנות  Creativity and Innovation in Organizations
',
		'55830  -  יישומים והרחבות בהערכת תשואה, שווי ושמאות מקרקעין  Implementation of Finance in Real Estate Valuation
',
		'55837  -  רפואה במאה ה 21: אתגרים ואפשרויות  A
',
		'55844  -  ניהול התפעול עם אירועים  Operations Management  MBA
',
		'55856  -  ניהול סיכונים ושוק ההון  Risk Management and Capital Markets
',
		'55873  -  מבוא לפיתוח תרופות ומכשור רפואי  Introduction to Medical Drug and Device Development
',
		'55898  -  מערכות מידע גיאוגרפיות GIS  Geographic information System GIS
',
		'55914  -  חקר ארגונים  Organizational Studies
',
		'55939  -  מודלים סטוכסטיים  Stochastic Models
',
		'55102  -  יסודות מדעי ההתנהגות  Foundatinos of Behavioural Sciences
',
		'55321  -  מתימטיקה א  Mathematics A
',
		'55510  -  ניהול אסטרטגי  Strategic Management
',
		'55531  -  תיאוריה ומעשה במשא ומתן  Negotiations  Theory and Practice.
',
		'55702  -  מבוא לכלכלה ב (מאקרו)  Management Economics (Macro)
',
		'55712  -  אופטימיזציה לא ליניארית  NonLinear Optimization
',
		'55718  -  רגולציה פיננסית גלובלית: עקרונות, מוסדות ויישומיהם  Financial Regulation World Wide: Principles, Institutions Applications
',
		'55727  -  אנליטיקה של ניהול קשרי לקוחות  Customer Relationship Management Analytics
',
		'55741  -  הקשבה בארגונים: מיומנויות בניהול  Managerial Listening Skills
',
		'55743  -  ניהול מותגים  Brand Management
',
		'55753  -  סוגיות עכשוויות בחשבונאות בשוק ההון הישראלי  Contemporary Matters in Accounting and the Israeli Capital Market
',
		'55796  -  מתמטיקה למינהל עסקים  Preparatory Course in Mathematics
',
		'55800  -  ניהול שרשראות אספקה  Supply Chain Management
',
		'55803  -  יסודות המימון  Fundamentals of Finance
',
		'55805  -  שיטות סטטיסטיות במינהל עסקים  Statistical Methods for Business Administration
',
		'55809  -  מכרזים מכירות פומביות  Auctions  Theory and Practice
',
		'55815  -  מודלים כמותיים בניהול  Quantitative Models
',
		'55821  -  אסטרטגיה עסקית  Business Strategy
',
		'55826  -  ניהול תקשורת ופרסום  Selected Topics in Advertising
',
		'55836  -  ניהול פרוייקטים  Project Management
',
		'55841  -  מודלים ליניאריים  Linear Models
',
		'55847  -  בחירת תיקי השקעות  Investments and Portfolio Theory
',
		'55871  -  יזמות ביו רפואית  Biomedical Entrepreurship
',
		'55889  -  נתונים וטכנולוגיה בעסקים  MBA  Internet Technology  MBA
',
		'55901  -  מיון עובדים  Personnel Selection
',
		'55904  -  מבוא למימון  Introduction to Finance
',
		'55908  -  שיקולים תאורטיים בניהול משאבי אנוש  Theoretical Dimensions in Human Resources Manage
',
		'55921  -  מדיניות מוצרים חדשים  New Product Policy
',
		'55928  -  כספים ובנקאות  Money and Banking
',
		'55945  -  שיטות כמותיות בניהול  Quantitative Methods in Management
',
		'55974  -  ניתוח דוחות פיננסים  Analysis of Financial Statements
',
		'55994  -  אסטרטגיה וניהול שיווק מתקדם  Advance Marketing Strategy
',
		'55330  -  סמינר בניהול התקשורת והפרסום  Seminar  Selected Topics in Advertising
',
		'55337  -  יזמות חברתית וכתיבת תוכנית עסקית  A
',
		'55507  -  סדנה יישומית במינהל עסקים  Practical Workshop in Management
',
		'55664  -  מימון המונים  המשך, סמינר  Crowdfunding and Alternative Markets  Seminar
',
		'55819  -  סמינר מעשי בשיווק בשיתוף עם מנהלי שיווק מובילים  Seminar in Marketing
',
		'55850  -  סמינר ביישום אסטרטגיה  Strategic Implementation Seminar
',
		'55855  -  סמינר במימון ובהשקעות נדל"ן  Real estate finance and investment seminar
',
		'55861  -  פרקטיקום בהשקעות נדלן  Real estate investment practicum
',
		'55869  -  פרוייקט סיום תכנית ניהול ביורפואי  Final Project in Biomedical Management
',
		'55907  -  סמינר בכלכלה פיננסית  Financial Economics Seminar
',
		'55923  -  סמינר בהשקעות אימפקט  Seminar Impact Investment
',
		'55935  -  סמינר בשיווק, בפרסום ובדיגיטל  Seminar in Marketing and Advertising
',
		'55956  -  סמינר אמפירי במימון ובחשבונאות  Empirical Seminar in Finance and Accounting
',
		'55315  -  סדנה ביזמות טכנולוגית  Technological Entrepreneurship
',
		'55775  -  מימון המונים ושווקים אלטרנטיביים  Crowdfunding and Alternative Markets
',
		'55894  -  ניהול קריירה בשיווק  Career Management in Marketing
',
		'55932  -  ניהול קרן השקעות  Investment Fund Managment
',
		'55119  -  השתתפות בניסויים  לתלמידי השילוב חשבונאות ומינהל עסקים  Participation In Experiments
',
		'55003  -  מכינה בחשבונאות  קורס קיץ  Preparatory Course in Accounting  Summer Course
',
		'55106  -  יסודות החשבונאות א  Introduction to Financial Accounting A
',
		'55116  -  אקסל לחשבונאים  Excel for Accounting Students
',
		'55405  -  מאזנים מאוחדים ב  Consolidated Financial Statements B
',
		'55431  -  טכנולוגית מידע  Accounting Information Systems
',
		'55515  -  מערכות פיננסיות לחשבונאים  Systems Finance for Accountants
',
		'55688  -  ביקורת חשבונות  Auditing
',
		'55903  -  מאזנים מאוחדים א  Consolidated Financial Statements A
',
		'55001  -  מתמטיקה לחשבונאים א  Mathematics A  Accounting
',
		'55108  -  יסודות המימון לחשבונאים  Fundamentals of Finance  Accounting
',
		'55112  -  יסודות המשפט ב  Principles of Lew B
',
		'55416  -  מיסוי מקרקעין  Real Estate Tax
',
		'55526  -  ביקורת מערכות מידע ממוחשבות  Information Systems Auditing
',
		'55848  -  מיסוי ביןלאומי  International Taxation
',
		'60120  -  מיסוי תאגידים  Corporate Tax
',
		'60140  -  חשבונאות פיננסית מתקדמת א+ב  Advanced Financial Accounting A+B
',
		'60160  -  תאוריה חשבונאית א  Issues in Advanced Financial Accounting
',
		'60180  -  שנה ד  forth year
',
		'60813  -  ניתוח דוחות פיננסיים  Analysis of Financial Statements
',
		'60817  -  מיסוי מקרקעין ומיסים אחרים  Real Estate Taxtion and Other Taxes
',
		'60828  -  מדידה ומיפוי  Measuring and Mapping
',
		'60830  -  GIS  GIS
',
		'60834  -  סמינר מורחב בהשקעות נדל"ן  Comprehensive Real Estate Investment Seminar
'
];
HUJI_courses_lists['הפקולטה למדעי החברה'] = 
[
		'51100  -  פסיכולוגיה בחברה הערבית  Psychology in the Arab Society
',
		'51109  -  הכירו את המדע: מח והתנהגות לתלמידי פסיכוביולוגיה  Brain and Behavior for Psychology Students
',
		'51116  -  הכירו את המדע: התפתחות חברתית  A View to Psychology Sciences: Social Development
',
		'51119  -  הכירו את המדע: קשב ותנועות עיניים  A View to Psychological Science: Attention and Eye Movements
',
		'51121  -  הכירו את המדע: איאמון  A View to Psychological Science: Distrust
',
		'51123  -  הכירו את המדע: ויסות רגשות  A View to Psychology Sciences: Emotion Regulation
',
		'51159  -  קשיבות וחמלה בחיי היום יום  Mindfulness and Compassion in Everyday Life
',
		'51161  -  היבטים פסיכולוגיים של טראומה והתעללות בילדים  Psychological aspects of child maltreatment and trauma
',
		'51202  -  תהליכים התפתחותיים  Developmental Psychology
',
		'51407  -  פסיכולוגיה ופוליטיקה בהקשרים חברתיים קהילתיים עכשוויים  Psychology & Politics in Social Community Context
',
		'51415  -  המוח החברתי  Social Neuroscience
',
		'51503  -  אישיות  Personality
',
		'51509  -  תרומת מחשבת פרויד לחשיבה הטיפולית המודרנית  Freuds Think. & Influences on Current Intellectual Thinking
',
		'51537  -  תהליכים פסיכוביולוגיים  Psychobiological Processes
',
		'51543  -  פסיכואנליזה פרוידיאנית  Freudian psychoanalysis
',
		'51562  -  תהליכי הערכה ואבחון בפסיכולוגיה קלינית  Psychological Assessment and Testing in Clinical Psychology
',
		'51570  -  תיאוריות מתקדמות ביחסים וסכסוכים בין קבוצות  Advanced theories in intergroup relations and conflicts
',
		'51576  -  רעיונות ומגמות חדשות בתורת ההחלטות ההתנהגותית  Beyond prospect theory: new trends and ideas in understanding and modeling decision biases
',
		'51605  -  הכרת המעשה הטיפולי מבוא לפסיכותרפיה  Introduction to Psychotherapy Field
',
		'51626  -  פסיכולוגיה אבנורמלית  Abnormal Psychology
',
		'51689  -  רעיונות מהותיים בתאוריה הפסיכואנליטית  Essential Ideas in Psychoanalytic Theory
',
		'51718  -  פסיכותרפיה לפי הגישה ההתייחסותית  The Relational Approach to Psychodynamic Psychotherapy
',
		'51723  -  פסיכופתולוגיה של המבוגר  Psychopathology of the Adult
',
		'51767  -  נפלאות הקשר בין מוח ונפש (ניסויי)  The Wonderful Connection between Brain and Mind
',
		'51773  -  סוגיות ביעוץ, טיפול ופסיכותרפיה בשיקום  Issues in Counseling Treatment & Psychotherapy
',
		'51780  -  נוירופתולוגיה  Neuropathology
',
		'51812  -  יסודות הפסיכופתולוגיה  Introduction to Psychopathology
',
		'51825  -  פסיכותרפיה למתקדמים  (פסיכודינאמית)  Advanced Psychotherapy  Psychodynamic
',
		'51854  -  יישום גישות טיפוליות שונות בפסיכותרפיה שיקומית (מיניפרקטיקום)  Application of Psychotherapeutic Approach in Rehabilitation
',
		'51883  -  אלטרואיזם אנושי  Human Altruism
',
		'51886  -  פסיכודיאגנוסטיקה ב  Psychodiagnosis B
',
		'51920  -  טיפול במזגר החרדי: סוגיות מיוחדות והתאמות ב  Treatment in the Charedi Community B
',
		'51958  -  פסיכולינגויסטיקה  Psycholinguistics
',
		'51966  -  גישות עדכניות קוגניטיביות התנהגותיות: תיאוריה ופרקטיקה  Recent Cognitive Behavioral Approaches: Theory and Practice
',
		'51990  -  טיפול במגזר החרדי: סוגיות מיוחדות והתאמות א  Treatment in the Charedi Community A
',
		'51002  -  חשיבה סטטיסטית בפסיכולוגיה חלק ב  Statistical Thinking in Psychology B
',
		'51103  -  שימושי מחשב R  Computers in Social Research R
',
		'51301  -  פסיכולוגיה ניסויית ושיטות מחקר  Experimental Psychology
',
		'51542  -  מבוא לפסיכומטריקה: מבחנים, נבחנים ומה שבינהם  Introduction to Psychometrics: Exams, Examinees and whats in Between
',
		'51749  -  סטטיסטיקה מתקדמת: מידול חישובי וניתוח מידע  Advanced Statistics: Computational Modeling and Data Analysis
',
		'51879  -  מבחנים נוירופסיכולוגיים א  Neuropsychological Tests A
',
		'51531  -  סמינריון מודרך בפסיכוביולוגיה  Guided Seminar in Psychobiology
',
		'51577  -  אלקטרופיזיולוגיה קוגניטיבית  יסודות  Fundamentals of Cognitive Electrophysiology
',
		'51696  -  טיפול קוגניטיבי ופסיכותרפיה בשיקום נוירופסיכולוגי  Cognitive Therapy & Psychotherapy in Neuropsychology Rehabilitation
',
		'51789  -  קולוקויום בפסיכולוגיה חברתית וקוגניטיבית שנה א  Social and Cognitive Colloquium  1st Year
',
		'51796  -  מחקר קליני: תהליכים ותוצאות בטיפול דינמי קצר מועד  Clinical Research  Process and Outcome in Short Term Psychodynamic Psychotherapy
',
		'51804  -  סוגיות מתודולוגיות נבחרות במחקר פסיכולוגי  Selected Methodoligal Issues in Psychological Research
',
		'51819  -  נושאים בפסיכולוגיה חברתית: פרוסמינר  Issues in Social Psychology: ProSeminar
',
		'51871  -  עקביות וחוסר עקביות בקוגניציה ומוטיבציה  Cognitive and Motivational (in) Consistency
',
		'51923  -  סדנה לדוקטורנטים שלב א  Workshop for PhD Students in Stage A
',
		'51971  -  סמינר מלווה לעבודות גמר  M.A. Thesis Seminar
',
		'51349  -  מעבדה במדעי המח וההתנהגות לתלמידי פסיכוביולוגיה  Lab. in Brain & Behavior for Psychobiology Students
',
		'51111  -  כתיבה אקדמית  קורס מלווה לעבודה סמינריונית  Academic Writing for Psychologists
',
		'51510  -  עבודה מעשית  טיפולית  Field Work  Experience in Therapeutic Milieu
',
		'51826  -  התנסות בשדה בפסיכולוגיה קלינית (פרקטיקום)  Field Work in Clinical Psychology
',
		'51927  -  הדרכה קבוצתית ייעודית שנה א  Group Supervision for First Year Students
',
		'51574  -  הדרכה קבוצתית יעודיית ב  Group Supervision for Second Year Students
',
		'51877  -  סדנה שנה א  התפתחות הפסיכולוג הקליניהמדע והמטפל הקליני  Workshop 1st Year
',
		'51963  -  קולוקויום למגמה הקלינית שנה ב  Clinical Colloquium  2nd Year
',
		'51982  -  סדנת הדרכה ייעודית ב  Special Seminar B
',
		'51204  -  עבודה מעשית מחקרית: נוירופסיכולוגיה קלינית  Field Work: Clinical Neuropsychology
',
		'51206  -  עבודה מעשית מחקרית: הזיכרון והלמידה באוכלוסיות שונות  נוירוטיפיקלית, אוטיזם, דיסלקסיה  Field work
',
		'51507  -  עבודה מעשית  מחקרית  Field Work  Research
',
		'51515  -  עבודה מעשית מחקרית: תהליכים רגשיים בסכסוכים בין קבוצות  Field Work: Emotional Processes in Intergroup Conflicts
',
		'51526  -  עבודה מעשית מחקרית: התפתחות מוסר  התנהגות קוגניציה מוטיבציה ורגש  Field Work: Moral Development  Behavior Cognition Motivation and Emotion
',
		'51554  -  עבודה מעשית מחקרית: זכרון עבודה ותנועות עיניים  Therapeutic Community: Practical Application
',
		'51632  -  עבודה מעשית מחקרית: ביולוגיה של התנהגות חברתית  Field Work: The Biology of Social Behavior
',
		'51687  -  עבודה מעשית מחקרית: קוגניציה חברתית  Field work: Social Cognition
',
		'51697  -  עבודה מעשית מחקרית: מודע, לא מודע וקוגניציה חברתית  Field work: Conscious, Unconscious and Social Cognition
',
		'51714  -  עבודה מעשית מחקרית: אמפתיה ומוח  Field work: The Neuroscience of Empathy
',
		'51776  -  עבודה מעשית מחקרית: הבעה וזיהוי של רגשות  Field Work: Expression and Recognition of Emotions
',
		'51898  -  התנסות קלינית בנוירולוגיה  Clinical Experience in Neurology
',
		'51997  -  עבודה מעשית מחקרית: נושאים ברכישת שפה ופסיכולינגויסטיקה  Field Work: Language Acquisition and Psycholinguistics
',
		'51544  -  עבודה סמינריונית  Seminar Paper B.A.
',
		'51752  -  עבודה סמינריונית במסגרת הדרכה אישית מחקרית למוסמך  Research Seminar Paper M.A
',
		'53051  -  התנהגות ארגונית ומנהיגות בארגונים  Organizational Behavior and Leadership in Organizations
',
		'53053  -  ריבוי תרבויות ורב תרבותיות בישראל  Multi Cultures and Multiculturalism in Israel
',
		'53055  -  כבוד האדם בישראל  Human Dignity in Israel
',
		'53102  -  מבוא לאנתרופולוגיה לתלמידי השלמה למוסמך  Introduction to Anthropology
',
		'53111  -  אנתרופולוגיה של הסביבה  Anthropology of the Environment
',
		'53121  -  סוציולוגיה של המשפחה  Sociology of Family  Families in Israel, a Sociological Perspective
',
		'53127  -  סוציולוגיה אורבנית  Urban Sociology
',
		'53258  -  קוראים עולם ספר בראשית כמבוא לאנתרופולוגיה  Reading Genesis as an Introduction to Anthropology
',
		'53291  -  פריווילגיה וזכויות יתר בחברה הישראלית  Social Privilege in Israel
',
		'53322  -  יסודות הייעוץ והפיתוח הארגוני  Foundations of organizational development and consulting
',
		'53336  -  יסודות בפסיכולוגיה חברתית  Social Psychology
',
		'53355  -  אי שיוויון והדרה חברתית  Social Exclusion and Inequality
',
		'53358  -  סוציולוגיה של האוניברסיטה  Sociology of the University
',
		'53380  -  אנתרופולוגיה של אמנות  Anthropology of Art
',
		'53388  -  סוציולוגיה של שתיקה והכחשה  Sociology of silence and denial
',
		'53408  -  אהבה וחברה  Love and Society
',
		'53437  -  סוגיות נבחרות בדמוגרפיה של המשפחה חלק א  SELECTED ISSUES: DEMOGRAPHY OF THE FAMILY  A
',
		'53491  -  דמוגרפיה בראי ההיסטוריה  Historical demography
',
		'53514  -  פיריון ונישואין חלק א  Fertility and Marriage A
',
		'53605  -  איך עושים קריירה במדע? גילוי הסודות הכמוסים של האקדמיה  Scientific Careers: Keys and Secrets of the Trade
',
		'53628  -  בחזרה לציבור :הנגשת המחקר ואנתרופולוגיה וסוציולוגיה ציבורית  Going Public: Communicating Research and Public Anthropology
',
		'53637  -  בין תאוריה ומעשה  Between theory and practice
',
		'53690  -  תחזיות ודינמיקה של אוכלוסייה  Population Projections and Dynamics
',
		'53725  -  בירוקרטיה ומדינה חלק א  Bureaucracy and State , Part 1
',
		'53811  -  אנתרופולוגיה של סבל: דיכאון, טראומה ופוסט טראומה  Anthropology of suffering: depression, trauma and posttrauma
',
		'53830  -  קריאה באנתרופולוגיה  Readings in Current Anthropology
',
		'53835  -  איך בונים תאוריה סוציולוגית  Building Sociological Theory
',
		'53863  -  סובייקטיביות: פרקים באנתרופולוגיה פסיכולוגית חלק א  SUBJECTIVITY: TOPICS IN PSYCHO LOGIC ANTHROPOLOGY.A
',
		'53900  -  איך להתחיל מחקר  סמינר דוקטורנטים שלב א  How to Start Your Research  Doctoral Seminar Stage A
',
		'53920  -  עבודת שדה  Ethnographic Fieldwork
',
		'53923  -  שיטות מחקר איכותניות למוסמך  חלק א  Qualitative Research Methods for M.A  Part 1
',
		'53929  -  סדנא לתלמידי מחקר מתקדמים  Graduate student workshop on research design
',
		'53101  -  מבוא לסוציולוגיה  Introduction to Sociology
',
		'53155  -  מבוא לאנתרופולוגיה  Introduction to Anthropology
',
		'53162  -  מבוא לדמוגרפיה  Introduction to Demography
',
		'53304  -  מבוא לשיטות מחקר איכותניות  Introduction to Qualitative Research Methods
',
		'53536  -  תיאוריות אנתרופולוגיות  Anthropological Theories
',
		'53057  -  זהויות וקהילות בישראל  Identities and Communities in Israel
',
		'53376  -  אנתרופולוגיה של ירושלים: אנשים, נרטיבים, כוח  Anthropology of Jerusalem: People, Narratives, Power
',
		'53490  -  ממשק אדם מכונה  Human  Machine Reconfiguration
',
		'53516  -  זיכרון קולקטיבי  Collective Memory
',
		'53526  -  בין חוצפה לניצוצות והברקות: איך חוקרים מדע ותרבות?  Hutzpa, Sparks and Brilliance: How do you Study Culture and Science?
',
		'53542  -  ידע,חברה,מגדר וקולוניאליזם  Knowledge, Society, Gender, and Colonialism
',
		'53560  -  יזמות חדשנות ורשתות  ENTREPRENEURSHIP INNOVATION AND NETWORKS
',
		'53820  -  חי צומח דומם :מעבדה למחקר חומרי  Material culture Labinar
',
		'53886  -  קונפליקט ושותפות בארגונים  Conflict and Partnership in Organizations
',
		'53603  -  הפוליטיקה של הטבע  The politics of nature
',
		'53930  -  הדרכה אישית לתלמידי מוסמך  TUTORIAL FOR M.A. STUDENTS
',
		'53909  -  פרופסיונליזציה אקדמית וכתיבת מאמרים  Academic profesionalization and article writing
',
		'53992  -  סוגיות מתודולוגיות  סדנת דוקטורנטים במחקר איכותני  Methodological issues  PhD student workshop in qualitative research
',
		'53000  -  יסודות בסוציולוגיה ואנתרופולוגיה בערבית  Foundations in Sociology and Anthropology in Arabic
',
		'56045  -  מקיאוולי  Machiavelli
',
		'56053  -  מקורותיה של המחשבה המדינית היהודית  The Sources of Jewish Political Thought
',
		'56062  -  חירות, אזרחות וגנדר  Freedom, Citizenship and Gender
',
		'56070  -  עבודה מעשית: ניסויים בהתנהגות פוליטית  Field work: Experiments in Political Behavior
',
		'56078  -  פוליטיקה של זהויות באירופה  Identitypolitics in Europe
',
		'56080  -  התנהגות פוליטית השוואתית  Comparative political bevavior
',
		'56082  -  הפוליטיקה והרגולציה של טכנולוגיות חדשות  Politics and regulation of new technologies
',
		'56085  -  מנהל ציבורי ומדיניות מזוית התנהגותית  A Behavioral Perspective of Public Administration and Policy
',
		'56095  -  דמוקרטיה בישראל: פוליטיקה וממשל  Democracy in Israel: Politics and Governance
',
		'56097  -  ארגון מודיעיני במשטר דמוקרטי  An Intelligence Organization in a Democratic Regime
',
		'56112  -  יסודות המחשבה המדינית ב: מרומא עד כיבוש אמריקה  Foundations of Political Thought B: From Rome to the Conquest of America
',
		'56137  -  ישראל, ירושלים ואזור יהודה והשומרון ישות אחת?  Israel, Jerusalem and Judea and Samaria  One Entity (?)
',
		'56145  -  יחסי חברה ומדינה במזרח תיכון משתנה  State Society Relations in a Changing Middle East
',
		'56147  -  מרטין בובר על יהדות, ציונות וביקורת מדינת הלאום המודרנית  Martin Buber on Judaism, Zionism & Critique of the Modern NationState
',
		'56151  -  מוות, חופש והחיפוש אחר משמעות, מסע קיומי בעקבות האנושי  באדם ובפוליטיקה  Hope: Human Odyssey to Political Existentialism
',
		'56154  -  מדינה, חברה וביטחון בישראל  State, Society and Security in Israel
',
		'56157  -  מדינה, חרות ושוויון: האידיאולגיות הגדולות שלאורן אנו חיים  State, liberty and equality: the great ideologies which guide us
',
		'56161  -  דילמות של דמוקרטיה ופוליטיקה של זהות בישראל  Dilemmas of Democracy and Politics of Identity in Israel
',
		'56247  -  מלחמות תרבות בישראל  Cultural Wars in Israel
',
		'56258  -  פורום מצטיינים שנה ב  Second Year Honors Forum
',
		'56338  -  מבוא לפסיכולוגיה פוליטית  Introduction to Political Psychology
',
		'56366  -  ספורט ופוליטיקה בעולם ובישראל  Sports and Politics Worldwide and in Israel
',
		'56410  -  מבוא לכלכלה מדינית  Introduction to Political Economy
',
		'56572  -  מגדר ופוליטיקה  Gender and Politics
',
		'56628  -  The American Party System  The American Party System
',
		'56630  -  The Politics of Violence in Modern Mexico: Armed Disorder and Statebuilding in Historical Perspecti  The Politics of Violence in Modern Mexico: Armed Disorder and Statebuilding in Historical Perspecti
',
		'56702  -  ניתוח התנהגותי של מנהל ציבורי ומשפט  Behavioral analysis of public administration and law
',
		'56705  -  משפט, ממשל וחברה  הפוליטיקה שמאחורי כללי המשחק  Law, Government, and Society  the Shaping of the Rules of the Game
',
		'56805  -  סוגיות בדמוקרטיה הישראלית  Issues in Israeli Democracy
',
		'56874  -  כיצד בוחרים: בחירות ושיטות בחירות  How we Vote: Elections and Electoral Systems
',
		'56100  -  מבוא למדע המדינה  תרגיל וכתיבה מדעית  Introduction to Political Science  exercise and academic writing
',
		'56105  -  יסודות המחשבה המדינית א  Foundation of Political Thought A
',
		'56108  -  מבוא היסטורי לפוליטיקה בת זמננו  Historical introduction to Contemporary Politics
',
		'56120  -  מחשבה מדינית מודרנית  Modern Political Thought
',
		'56865  -  גישות ותאוריות במדע המדינה  Approaches and Theories in Political Science
',
		'56021  -  פוליטיקה במילים  נאומים, הכרזות ודיונים פוליטיים  Politics in Words: Speeches Declarations and Political Debates
',
		'56094  -  ביטחון לאומי בעת שגרה ובעת לחימה  National security during routine and warring times
',
		'56153  -  פוליטיקה, סכסוך ושלום בראי הקולנוע  Politics, Conflict & Peace in Films
',
		'56313  -  מצב הדמוקרטיה בישראל: המאבק האידיאולוגי במערכת המפלגתית  The State of Israeli Democracy  the ideological struggle in the party system
',
		'56756  -  שוויון  Equality
',
		'56139  -  מצרים ממהפכה למהפכה  Egypt between two Revolutions
',
		'56704  -  התערבויות פסיכולוגיות להפחתת גזענות  psychological interventions to reduce prejudice
',
		'56828  -  בתי מחוקקים במדינות דמוקרטיות: הכנסת במבט השוואתי  Democratic Legislatures: The Knesset in Perspective
',
		'56872  -  מדיניות ציבורית למתקדמים: קורס יסוד לתלמידי מחקר  Public Policy for Advanced Students: Basic Course for Research Students
',
		'56886  -  סוגיות יסוד במחשבה פוליטית: אידיאולוגיות  Fundamental Issues in Political Theory: Ideologies
',
		'56898  -  פוליטיקה ומשטרים במזרח התיכון  Politics and Regimes in the Middle East
',
		'56989  -  קפיטליזם ומוסר: הפילוסופיה המוסרית והפוליטית של אדם סמית׳  Capitalism and Morality: Adam Smiths Moral and Political Philosophy
',
		'56627  -  קווי תפר נקודות מגע בערים שסועות  Seam lines  contact points in divided cities
',
		'56801  -  קריאה מודרכת לתלמידי מ"א  Guided Reading Tutorial
',
		'56073  -  סדנה במנהיגות חינוכיתחברתית לשנה ב  Workshop in Educational and Social Leadership for the Second Year
',
		'56076  -  סדנה במנהיגות חינוכיתחברתית לשנה א  Workshop in Educational and Social Leadership for the First Year
',
		'56700  -  מדע המדינה לעידן הפופוליזם  Political Science for the Age of Populism
',
		'56851  -  סדנת התכנית לתלמידי מחקר (תל"מ)  Telem Graduate Students Workshop
',
		'56985  -  סדנת דוקטורנטים שלב א  Workshop for Doctorants Stage A
',
		'56808  -  סמינר בנושאים מתקדמים בדיסציפלינה  Topics in Contemporary Research
',
		'58133  -  סוציולוגיה פוליטית בינ"ל  International Political Sociology
',
		'58226  -  אפריקה במאה ה20: מקולוניאליזם לעצמאות  Africa in the 20th century: From colonialism to independence
',
		'58323  -  מדע, טכנולוגיה ומלחמה  Science, technology and war
',
		'58358  -  מלחמת המפרץ הראשונה (19901991) והמאבק הבין לאומי על השליטה במפרץ הפרסי  The First Gulf War (19901991) and the International Struggle for the Persian Gulf
',
		'58372  -  סוגיות גרעיניות והניסוי הגרעיני ככלי מיקוח  Issues in Nuclear Proliferation and the nuclear test as a bargaining chip
',
		'58375  -  אינטרסים ומוסדות בכלכלה הגלובלית  interests and institutions in the global economy
',
		'58386  -  מובלעת הר הצופים: סיור ועיון במרחב אקדמיבטחוניפוליטי  The Mt. Scopus Enclave: Hebrew Universitys Campus as an AcademicPoliticalSecurity Space
',
		'58395  -  שלום ביחב"ל  peace in international relations
',
		'58398  -  סוגיות של צדק ביחסים הבינלאומיים  justice in international relations
',
		'58405  -  מבוא לחקר המודיעין  Introduction to intelligence studies
',
		'58408  -  טבע וטבעם של סכסוכים  Nature and the Nature of Conflicts
',
		'58411  -  ישראל, אמריקה הלטינית והתפוצה היהודית  israel
',
		'58436  -  מלחמות צה"ל החדשות  War
',
		'58460  -  זהות ויחסים ביןלאומיים  Identity and International Relations
',
		'58474  -  עלייתן ונפילתן של הציווילזציות הגדולות  The Rise and Fall of the Great Civilizations
',
		'58483  -  פליטים ומבקשי מקלט במדינות מערביות: נורמות ביןלאומיות פוגשות מדיניות מקומית  Refugees and Asylum Seekers in Western Countries: International Norms meet Local Policies
',
		'58535  -  מו"מ לשלום במזה"ת  NEGOTIATING MIDDLE EAST PEACE
',
		'58675  -  מורשת תרבות במשפט ביןלאומי ויחסים ביןלאומיים  Cultural Heritage in International Law and Relations
',
		'58729  -  הכלכלה הפוליטית של ישראל ומדיניות החוץ הכלכלית שלה  The Political Economy and Foreign Economic Relations of Israel
',
		'58734  -  מודיעין וביטחון לאומי  Intelligence in National Security and Strategy
',
		'58739  -  מודיעין וקבלת החלטות במצב משברי  Intelligence and Decision Making in crises situation
',
		'58936  -  אריגת אמת: מבט מגדרי על ועדות פיוס, קורבנות ועדים  Weaving Truths: Commissions, Victims and Witnesses from Gender and Participatory Perspectives
',
		'58106  -  יחסים ביןלאומיים במאה ה20  חלק ב  INTERNATIONAL RELATIONS IN THE 20TH CENTURY  Part 2
',
		'58111  -  מבוא לחקר היחסים הביןלאומיים חלק ב  Introduction to the Study of International Relations: part 2
',
		'58303  -  שיטות וגישות ביחסים ביןלאומיים ובמדע המדינה  Scope and Methods in International Relations and Political Science
',
		'58391  -  מגדר ומלחמה  war and gender
',
		'58515  -  סכסוכים תוך  מדינתיים: אלימות והסדרה  INTRASTATE CONFLICTS: VIOLENCE & REGULATION
',
		'58530  -  מדע בדיוני ופוליטיקה (בינ"ל)  SCIENCE FICTION AND (INTERNATIONAL) POLITICS
',
		'58578  -  יחסים ביןלאומיים באסיה: תיאוריה ומציאות  IR in Asia: Theory and Practice
',
		'58121  -  הפוליטיקה של המערכת הכלכלית הביןלאומית: היבטים גלובאליים ואירופים  THE POL. OF THE INTERNATIONAL ECONOMIC SYSTEM: Global and European Perspectives
',
		'58823  -  ישראל ומעצמות אירופה: סדנה בשיטות היסטוריות  Israel and the European powers: a historical wor
',
		'58879  -  אנרגיה גרעינית במאה ה21  nuclear energy in the 21st century
',
		'58885  -  הפוליטיקה של הטכנולוגיה: היבטים של ביטחון וכלכלה  The politics of technology: Aspects of security and economics
',
		'58902  -  ידידות בין מדינאים ומדינות  friendship between states and between statepersons
',
		'58929  -  תיאוריות של ביטחון בינ"ל  קורס יסוד לתלמידי מחקר  Field seminar in international security
',
		'58712  -  עיצוב מדיניות חוץ: סדנה מעשית  Foreign Policy Formulation: Practical Workshop
',
		'58900  -  סדנת דוקטורנטים  DOCTORAL WORKSHOP
',
		'52002  -  כריית מידע מנתונים גדולים  Big Data Mining.
',
		'52010  -  תורת האינפורמציה ויישומיה בסטטיסטיקה  Information theory and applications in statistics
',
		'52114  -  שיטות בייזיאניות בבעיות מרובותפרמטרים  Bayesian methods for largescale inference
',
		'52414  -  ניתוח נתונים עם R  Data Analysis with R
',
		'52568  -  מעבדה בסטטיסטיקה  STATISTICS LAB
',
		'52710  -  עקרונות תכנון ניסויים ושיטות דגימה  PRINCIPLES OF EXPT DESIGN & SAMPLING METHODS
',
		'52755  -  שיטות ביוסטטיסטיות  BIOSTATISTICAL METHODS
',
		'52879  -  שיטות חישוביות בתכנון לא לינארי  COMPUTATIONAL METHODS IN NONLINEAR OPTIMIZATION
',
		'52006  -  הסתברות לסטטיסטיקאים למדעי המחשב  Probability for CS students
',
		'52024  -  יסודות הסטטיסטיקה לרוקחים  STATISTICS FOR PHARMACOLOGISTS
',
		'52112  -  חשבון דיפרנציאלי ואינטגרלי לסטטיסטיקאים א  CALCULUS FOR STATISTICIANS A
',
		'52116  -  מבוא לסטטיסטיקה א (ללא סטטיסטיקאים)  INTRODUCTION TO STATISTICS I (FOR NONSTAT.)
',
		'52220  -  יסודות ההסתברות  BASIC PROBABILITY
',
		'52304  -  מבוא לתכנות  Introduction to Programming
',
		'52311  -  עיבוד נתונים בסטטיסטיקה מודרנית  MODERN STATISTICAL DATA ANALYSIS
',
		'52324  -  הסתברות לסטטיסטיקאים  Probability for Statistics students
',
		'52411  -  מבני נתונים ואלגוריתמים  Data structures and algorithms
',
		'52571  -  רגרסיה ומודלים סטטיסטיים  REGRESSION AND STATISTICAL MODELS
',
		'52801  -  מודלים סטטיסטיים למתקדמים א  ADVANCED STATISTICAL MODELS A
',
		'52817  -  הסתברות ותהליכים מקריים  PROBABILITY AND RANDOM PROCESSES
',
		'52850  -  סמינר דוקטורנטים שלב א  DOCTORAL SEMINAR PART A
',
		'52877  -  סמינר מחלקתי  Department Seminar
',
		'52727  -  ייעוץ סטטיסטי מתקדם  Advanced Statistical Consulting
',
		'57010  -  כלכלת ישראל  The Israeli Economy
',
		'57130  -  מתמטיקה לתלמידי מכפיל  Math for Machpil students
',
		'57152  -  נושאים במיקרו כלכלה אמפירית  Topics in Empirical Microeconomics
',
		'57253  -  המערכת הפיננסית, המשבר הפיננסי הגלובלי והניתוח במאקרוכלכלה  The Financial System, the Global Financial Crisis and
',
		'57257  -  מסחר בינלאומי ופיתוח  International Trade and Development
',
		'57315  -  תורת המשחקים ויישומים בכלכלה  Game Theory and Economic Applications
',
		'57401  -  נושאים במשפט וכלכלה  Topics in Law and Economics
',
		'57467  -  כלכלה התנהגותית ויישומיים אימפירים  Behavioral Economics and Empirical Applications
',
		'57469  -  נושאים בחקר המיסוי אמפירי  Topics in Empirical Tax Research
',
		'57509  -  אלגברה לינארית לכלכלנים  LINEAR ALGEBRA FOR ECONOMISTS
',
		'57556  -  מתמטיקה מתקדמת לכלכלנים  ADVANCED MATHEMATICS FOR ECONOMISTS
',
		'57639  -  כלכלה יישומית  Research Course in Applied Economics
',
		'57676  -  שערי חליפין ומאקרוכלכלה ביןלאומית  Exchange Rates and International Macroeconomics
',
		'57705  -  נושאים במדיניות פיסקלית  Topics in Fiscal Policy
',
		'57750  -  למידת מכונה לכלכלנים  Machine Learning for Economists
',
		'57781  -  סדנה בארגון תעשייתי ואקונומטריקה  Industrial Organization and Econometrics Workshop
',
		'57811  -  כלכלת הגירה  The Economics of Migration
',
		'57824  -  אקונומטריקה למוסמך א  ADVANCED ECONOMETRICS A
',
		'57836  -  סדנה בכלכלה התנהגותית  Behavioral Economics Workshop
',
		'57855  -  סדרות עתיות  TIME SERIES
',
		'57866  -  מבנה שווקים למוסמך (א)  GRADUATE INDUSTRIAL ORGANIZATION (I)
',
		'57900  -  תיאוריה אירגונית  Organizational Theory
',
		'57994  -  נושאים ברציונליות  TOPICS IN RATIONALITY
',
		'57122  -  חשבון דיפרנציאלי ואינטגרלי לכלכלנים ב  MATH FOR ECONOMISTS A2
',
		'57340  -  סטטיסטיקה לכלכלנים א  Statistics for Economists A
',
		'57807  -  כלכלה פוליטית  POLITICAL ECONOMY
',
		'57999  -  סמינר מורים בכלכלה  FACULTY SEMINAR IN ECONOMICS
',
		'57986  -  סמינריון מחקר לדוקטורנטים  RESEARCH WORKSHOP FOR DOCTORAL STUDENTS
',
		'57107  -  מבוא לכלכלה א (מיקרו)  INTRODUCTION TO ECONOMICS I (MICRO)
',
		'57305  -  מקרוכלכלה א  MACRO ECONOMICS I
',
		'57308  -  תורת המחירים ב  PRICE THEORY II
',
		'50005  -  ערכים בחברה הישראלית  Changing Values in Israeli Society
',
		'50018  -  השפעות התקשורת  Media Effects
',
		'50046  -  מרושתים: מדיה חברתיים והשלכותיהם החברתיות, פוליטיות והתרבותיות  Social Media and their Social, Cultural and Political Implications
',
		'50058  -  תקשורת מחאה גלובלית  Global Protest Communication
',
		'50076  -  מחוברים לתקשורת חלק ב  Connected to Communication (B)
',
		'50104  -  תקשורת אפקטיבית וניהול משא ומתן  Communication and Negotiation
',
		'50106  -  סכסוכים פוליטיים ואחרים בחברה הישראלית בעידן הרשתות החברתיות  The Conflict in the eye of Social Media
',
		'50123  -  מצטיינים שנה ג  Honors Course in Communications  3rd Year
',
		'50129  -  תורת השכנוע: שיטות אפקטיביות לשינוי עמדה  Persuasion and Attitude Change
',
		'50136  -  תרבות חזותית: קבוצת קריאה למתקדמים  Visual Culture: Advanced Reading Group
',
		'50224  -  טכנולוגיות תקשורת וחברה: סוגיות היסטוריות  Communication Technologies and Society:Historical Issues
',
		'50252  -  מאחורי הכותרות  Behind the Headlines
',
		'50261  -  תקשורת ותחזיות פוליטיות: קורס השתתפות בקבוצת מחקר בינלאומי  Mediating the Future: Participation in an International Research Team
',
		'50420  -  קולנוע ישראלי: זהות, תרבות וחברה  Israeli Film: Identity, Culture and Society
',
		'50482  -  תקשורת מילולית ולא מילולית אפקטיבית במדיה ובתקשורת הבין  אישית  Effective Verbal and NonVerbal Communication in the Media
',
		'50860  -  סדנת דוקטורנטים שלב ב  Workshop for Doctoral Students (2)
',
		'50894  -  סדנת דוקטורנטים שלב א  Workshop for Doctoral Students (1)
',
		'50972  -  ניהול משברים תקשורתיים  Managing Communications Crisis
',
		'50999  -  גישות ומיומנויות לתלמידי מחקר  Research Approaches and Skills for Graduate Students
',
		'50003  -  מבוא לתקשורת המונים  חלק א  Introduction to Mass Comminucation (A)
',
		'50040  -  יסודות המחקר באינטרנט: עידן התקשורת הגלובלית  Foundations of Internet Research: The Age of Global Communication
',
		'50110  -  פסיכולוגיה חברתית בתקשורת  Social Psychology in Communication
',
		'50270  -  סטטיסטיקה לתלמידי תקשורת  Statistics for Communication Students
',
		'50272  -  שיטות מחקר בתקשורתחלק ב  Research Methods in CommunicationPart 2
',
		'50515  -  תקשורת לשונית  Language and Communication
',
		'50768  -  שיטות מחקר איכותניות ואתנוגרפיות מתקדמות לחקר השתתפות דיגיטלית  Advanced Qualitative and Ethnographic Methods for the Study of Digital Participation
',
		'50888  -  תרבות דיגיטלית ומדיה חדשים  Digital Culture and New Media
',
		'50010  -  לעשות חדשות: עיתונאות פלורליסטית במדיה חדשים ישנים  Making News: Pluralistic Journalism in New and Old Media
',
		'50043  -  השפעות פסיכולוגיות של תקשורת בסביבה מורכבת  Psychological Influences of Communication in Complex Environment
',
		'50056  -  מי שולט באינטרנט?  Who Controls the Internet?
',
		'50062  -  נרטיבים, זהויות ותקשורת בחברה רב תרבותית  Narratives, Identities and Communication in Multicultural Society
',
		'50068  -  בטחון סייבר: טכנולוגיה, מדיניות ופוליטיקה  Cyber security: Technology, Policy, and Politics
',
		'50070  -  צדק מעברי בפוליטיקה, בעיתונות ובתרבות  Doing Transitional Justice Through Politics, Journalism and Culture
',
		'50082  -  עדות ומדיה  Witnessing and Media
',
		'50092  -  המפגש בין יהודים וערבים בישראל יחסי כוח, דיאלוג והתעמתות  Psychology and Communication in Intergroup Relations and Conflict in the Israeli Context
',
		'50102  -  תקשורת, רגשות ושינוי עמדות  Media, Emotions and Political Attitudes
',
		'50128  -  תקשורת פוליטית במאה ה21: סוגיות מתקדמות  Political Communication in the 21st Century: Advanced Topics
',
		'50131  -  סוגיות מתקדמות בחקר תקשורת, מדיה חברתית וזהויות אתנולאומיות, מגדריות ותרבותיות  Advanced Research in Communication, Social Media and Ethnonational, Gender and Cultural Identities
',
		'50134  -  עקרונות השכנוע הפוליטי  Political Persuasion
',
		'50275  -  מגדר ומגוון חברתי בתקשורת  Gender and Social Diversity: Media Perspectives
',
		'50426  -  קולנוע דוקומנטרי וזכויות האדם  Documentary Cinema and Human Rights
',
		'50522  -  חדשות: פרספקטיבה בינלאומית  News: International Perspective
',
		'50772  -  תרבות חזותית ומדיה דיגיטליים: דימוי, מסך, ממשק  Visual Culture and Digital Media: Image, Screen, Interface
',
		'50817  -  תקשורת אפקטיבית ככלי ליישוב סכסוכים ולניהול משאומתן  Effective Communication as a Tool of Conflict Resolution and Negotiation Management
',
		'50921  -  פסיכולוגיה, תקשורת, וזהויות קבוצתיות: מחקר וכתיבה אקדמיים מתקדמים  Psychology, Politics, Gender and Social Networks in Intergroup Relations and in Conflict
',
		'50974  -  פרטיות, טכנולוגיה והמדיה החדשים  Privacy, Technology and New Media
',
		'50993  -  יהודים ותקשורת  Jewish Communication
',
		'50042  -  הפקת וידאו קליפים תוך שימוש בחומרים קולנועיים ארכיוניים וויזואליםדיגיטליים  Producing Videoclips with CinematicArchival and VisualDigital Materials
',
		'50066  -  דיגיטל: תכנון ובנייה של קמפיינים, והתנהגות משתמשים  Digital : Campaigns and Users Behavior
',
		'50074  -  כתיבה מגזינית וחדשותית בפרינט ובדיגיטל  Magazine and News Writing
',
		'50283  -  דיאלוג ותקשורת בין קבוצות בקונפליקט  Intergroup Communication and Dialogue
',
		'50707  -  כתיבה לרדיו, טלוויזיה ומולטי מדיה  Writing for Radio , Televion and Multimedia
',
		'50755  -  הופעה מיקרופון והופעה מול מצלמה  Voice and Camera Performance
',
		'50848  -  פרסום  Advertising
',
		'54100  -  מדינה, משק, מוסר : מבוא אינטגרטיבי (שעור)  State, Market, Morality: Integratie Introduction
',
		'54103  -  עבדים, היינו? סוגיות מוסריות בשוק העבודה  Labor and liberty: Moral issues in the labor market
',
		'54109  -  מבוא לפילוסופיה של מדעי החברה  Philosophy for Social Sciences
',
		'54129  -  סוגיות בפילוסופיה של מדעי החברה  Issues in Philo. of Social Sciences
',
		'54107  -  קריאה ביקורתית בפכ"מ (תרגול קורס 54100)  Critical Reading in P.E.P Texts
',
		'54121  -  הסטוריה כלכלית  Economic History
',
		'54124  -  מודלים של איכות חיים ושל צדק חלוקתי: תורת השטחות ויישומיה  Life Quality Distributive Justice: Faceted Models
',
		'54341  -  משבר הדמוקרטיה הליברלית: עיון פילוסופי  Liberal Democracy is Crisis: Philosophical Reflections
',
		'54110  -  מתמטיקה  Mathematics
',
		'59420  -  נייר מדיניות  Policy Paper
',
		'59602  -  סוגיות בטרור, כלכלה ופוליטיקה  Selected Topics from the Economics of Terrorism and Politics
',
		'59605  -  מדיניות סייבר: האם ניתן לאלף את האינטרנט? מבוא לממשל אינטרנט  Can the Internet Be Tamed? An Introduction to Internet Governance
',
		'59608  -  קבלת החלטות במדיניות ציבורית  DECISION MAKING IN PUBLIC POLICY
',
		'59610  -  מדיניות בחברה הישראלית  Policy in Israeli Society
',
		'59614  -  מדיניות במבט מקומי וגלובלי  Policy in global and Local View
',
		'59624  -  תיאוריות של הליך המדיניות הציבורית  Theories of the Public Policy Process
',
		'59628  -  יישום מדיניות  Policy Implementation
',
		'59637  -  Whole of Government Strategies: Design and Evaluation  Whole of Government Strategies: Design and Evaluation
',
		'59677  -  פוליטיקה של הטכנולוגיה  politics of the Technology
',
		'59713  -  תשתית מושגית בכלכלה א  Basic Concepts in Economics A
',
		'59716  -  כלכלה ומדיניות ציבורית  Economics and Public Policy
',
		'59722  -  אי השוויון בישראל  INEQUALITY IN ISRAEL
',
		'59825  -  תהליך התקצוב בישראל  BUGETING PROCESS IN ISRAEL
',
		'59827  -  סטטיסטיקה ושיטות כמותיות  Statistics and Quantitative Methods
',
		'59911  -  ניתוח מדיניות  Policy Analysis
',
		'59915  -  ניהול מו"מ  Negotiation
',
		'59921  -  משפט ציבורי ואתיקה  Public Law and Ethic
',
		'59923  -  פילנתרופיה ומגזר ציבורי בישראל  Philanthropy in Israel in the Public Service
',
		'59928  -  ניהול שיח עמיתים  Colleagues Dialogue: Organizational Theory
',
		'59931  -  מדיניות ציבורית בראי השוואתי בין לאומי  Public Policy in Comparative and Global Perspectives
',
		'59933  -  פוליטיקה של המנהל הציבורי  Politics in Public Administration
',
		'59935  -  ניהול ומנהיגות בעולם משתנה  Management and Leadership in a Changing World
',
		'59941  -  גיוון ואתגרים בחברה הישראלית  Diversification and challenges in the Israeli Society
',
		'59944  -  תכנון וחשיבה אסטרטגית  Strategic Planning and Thinking
',
		'59960  -  תשתית מושגית בכלכלה ב  Basic Concepts in Economics B
',
		'59990  -  יישום מדיניות  Implementing Policy
',
		'59634  -  מדיניות מוכוונת אוכלוסיה  PopulationDriven Policy
',
		'59632  -  סדנת שטח  ODT
',
		'59726  -  קריאה מודרכת  Guided Reading
',
		'59874  -  הדרכה אישית  Tutorial
',
		'59966  -  סדנת שטח במנהיגות  Out Door Training
',
		'59775  -  נייר מדיניות למוסמך  M.A. Policy Paper
',
		'57805  -  סדנה בכלכלה יישומית  Applied Workshop
',
		'57915  -  סמינר למוסמך  MA thesis workshop
',
		'57917  -  כלכלת משפחה ומאקרו כלכלה  Family Macroeconomics
',
		'57923  -  צדק חלוקתי  Distributive Justice
',
		'57966  -  נושאים בתכנון מנגנונים (מיקרו כלכלה ג)  TOPICS IN MECHANISM DESIGN (MICRO C)
',
		'57979  -  נושאים בהיסטוריה כלכלית של המאה ה20  TOPICS IN THE ECO. HISTORY OF THE 20TH CENTURY
',
		'57988  -  אקונומטריקה א למוסמך מחקרי  ECONOMETRICS A FOR RESEARCH MA STUDENTS
',
		'57963  -  משחקים וכלכלת אינפורמציה (מיקרו כלכלה ב)  GAME THEORY & INFORMATION ECONOMICS (MICRO B)
',
		'57971  -  תורת המשחקים וכלכלת אינפורמציה א  GAME THEORY AND ECONOMICS OF INFORMATION I
',
		'57977  -  אקונומטריקה ב למוסמך מחקרי  ECONOMETRICS B FOR RESEARCH MA STUDENTS
',
		'57944  -  סמינר מחקרי לתלמידי מוסמך בכלכלה  Departmental Seminar for MA Research Students
',
		'57949  -  סדנה במיקרו כלכלה יישומית  Applied Microeconomics, Workshop
',
		'54712  -  ניהול ויישוב סכסוכי עבודה  Managment and Resolution of Labor Conflicts
',
		'54718  -  דיאלוג, נרטיבים וזהויות ביישוב סכסוכים  Dialogue, Narratives, Identities and Conflict Resolution
',
		'54749  -  פרקטיקום לתלמידי מוסמך ומחקר שדה אתנוגרפי בסכסוכים חברתיים ופוליטיים  Internship and Ethnographic Field Research In Social And Political Conflicts
',
		'54703  -  גישות מתקדמות למחקר איכותני ונרטיבי של זהויות וסיפורי חיים במצבי סכסוך ובחברות רבתרבותיות  Advanced approaches for qualitati narratives research of identities and life stories in conflict
',
		'54709  -  סמינריון מחלקתי בין תחומי שנה ב  INTERDISCIPLINARY DEPARTMENTAL SEMINAR
',
		'54705  -  גישות אינטרדיסציפלינריות לחקר ופתרון סכסוכים  Interdisciplinary Approaches to Conflict Research and Resolution
',
		'54715  -  מקונפליקט לפיוס ביחסים בין עמים ומדינות  From conflict to reconciliation between people and states
',
		'54717  -  תאוריות ומחקר ביישוב סכסוכים  Theories and Research in Conflict Resolution
',
		'54741  -  דיאלוג והכרה בסכסוכים אתנולאומיים מתמשכים  Dialogue and Recognition in Prolonged Ethno national Conflicts
',
		'54706  -  גישור ויישוב סכסוכים  Mediation & ADR
',
		'59503  -  מנהיגות קהילתית נשית בירושלים  Women Community Leaders in Jerusalem
',
		'59506  -  אתיקה של ארגונים בינלאומיים  ETHICS OF INTERNATIONAL ORGANIZATIONS
',
		'59515  -  קורס קדם התמחות: צעדים ראשונים להתמקצעות בשטח  PreInternship Course: First steps for professionalism in the field
',
		'59525  -  יזמות וחדשנות חברתית  ENTREPRENEURSHIP AND SOCIAL INNOVATION
',
		'59529  -  קהילה וקהילתיות  Community Building  An infrastructure for development
',
		'59533  -  מגדר ופיתוח  Gender and Development
',
		'59540  -  מגדר ופמיניזם  Gender and Feminism Theory and Practice
',
		'59539  -  שיטות מחקר לתלמידי פיתוח  Research Methods for Development
',
		'59514  -  סמינר התכנית חלק ב  THE PROGRAM SEMINAR PART B
',
		'59542  -  הדרכה אישית לכתיבת התיזה  Individual guidance  Thesis writting
',
		'54677  -  הקולוקוויום של פורום אירופה א  European Forums Colloquium A
',
		'54777  -  הקולוקוויום של פורום אירופה ב  European Forums Colloquium B
',
		'54621  -  מדיניות אזורית ואורבנית של האיחוד האירופי  Regional and Urban Policy of the European Union
',
		'54624  -  The European Museum: History, Identity and Knowledge  The European Museum: History, Identity and Knowledge
',
		'54821  -  היסטוריה של אירופה המודרנית  Modern European History
',
		'54853  -  Nuclear Proliferation, Deterrence, and Arms Control: Challenges and Policy Options for Europe  Nuclear Proliferation, Deterrence, and Arms Control: Challenges and Policy Options for Europe
',
		'54886  -  פוליטיקה אלקטורלית באירופה  European Electoral Politics
',
		'54823  -  היסטוריה חברתית ותרבותית בלב אירופה  Social and Cultural History in the Heart of Europe
',
		'54619  -  התמחות לתלמידי פורום אירופה  Internship for Students of the European Forum
',
		'54611  -  קרקע לא יציבה: יחסי אנגליהגרמניה במאות ה19 וה20  Unstable Ground: AngloGerman Relations during the 19th and 20th Centuries
',
		'54613  -  דימוי(ים) של המזרח  היסטוריה חזותית של מזרח גרמניה  Image(s) of the East  A Visual History of the GDR
',
		'54617  -  הרס, בנייה, שחזור: עיצוב המרחב והדימוי של ברלין  Destruction, Construction, Reconstruction: Shaping Berlins Space and Image
',
		'54626  -  תקשורת בגרמניה בין עיתונות מודפסת לרשתות דיגיטליות  German Media between Printed Press and Digital Networks
',
		'54835  -  התקשורת וחברה בגרמניה  פרספקטיבות היסטוריות ועכשוויות  Media and Society in Germany  Historical and Contemporary Perspectives
',
		'54618  -  סיור לימודי: הרס, בניה, שחזור: עיצוב המרחב והדימוי של ברלין  Study Excursion: Destruction, Construction, Reconstruction: Shaping Berlins Space and Image
',
		'54222  -  קולוקוויום ללימודי מגדר ב  Colloquium in Gender Studies B
',
		'54239  -  סוגיות ושיטות במחקר פמיניסטי  Themes and Methods in Feminist Reaserch
',
		'54254  -  מגדר ומגוון במרחב  Gender and Diversity Seminar
',
		'54259  -  זכויות אדם, פמיניזם ושינוי חברתי  Human rights, feminism and social change
',
		'54271  -  טקסט ומגדר: לכתוב כאילו חייך תלויים בזה  Text and Gender: To Write as if Your Life Depended on it
',
		'54328  -  חברותא בתרבות  CULTURAL STUDIES CHAVRUTA
',
		'54354  -  תאוריות ביקורתיות של תרבות  Critical Theories of Culture
',
		'54330  -  לימודי תרבות  סמינר מחלקתי  Cultural Studies  Dept. Seminar
',
		'54218  -  גלויות: בעקבות הרליקייה של המודרנה  Postcards: Studying the Relics of Modernity
',
		'54221  -  מרחבי מדיה: המוזיאון  Media Spaces: The Museum
',
		'54242  -  מדע ומגדר  Gender and Science
',
		'54246  -  חפצים רגשיים מפגש עם "מטריאליזמים חדשים"  Affective Things: How Culture Matters
',
		'54304  -  קריאה מודרכת  GUIDED READING Cultural Studies
',
		'54356  -  עיון בתיאוריה פוסטקולוניאלית: יסודות  Postcolonial Theory
',
		'54394  -  הטקס של הכוח, הכוח של הטקס  The Ritual of Power, The Power of Ritual
',
		'54400  -  לימודים בחו"ל במסגרת תואר משותף  Studies Abroad towards a Joint Degree
',
		'54443  -  עבודה סמינריונית  Seminar Paper
',
		'54255  -  תכנות בVBA  VBA programming
',
		'54441  -  עבודה סמינריונית  Seminar Paper
',
		'54445  -  עבודה סמינריונית  Seminar Paper
',
		'54448  -  עבודה סמינריונית  Seminar Paper
',
		'54288  -  המרחב המחקרי במדעי החברה  Interdisciplinary Group Research
',
		'40051  -  סוגיות בגאוגרפיה עירונית:תהליכי פרבור ומיקום פעילויות כלכליות  Issues in urban Geography
',
		'40112  -  אקטיביזם סביבתי בישראל היבטים חברתיים ופוליטיים  Environmental activism in Israel social and political aspects
',
		'40129  -  גאוגרפיות של מגורים: יזמות, תכנון והשתתפות הציבור  Geographies of housing: planning, development and public participation
',
		'40221  -  מבוא לגאוגרפיה חברתית  Introduction to social Geography
',
		'40303  -  נוודות, דת ומדינה: הבדווים בישראל ובמזה"ת במבט גאוגרפי היסטורי  Nomadism, religion and state: Bedouins in Israel and the Middle East in geographical and historical
',
		'40339  -  גיאוגרפיות של שינוי: מרחב, חברה, וסביבה בסין העכשווית  Geographies of change: space, society, and ecology in contemporary China
',
		'40380  -  הפרטת המרחב הציבורי: דרך ללא חזרה?  The privatization of public space:A dead end process?
',
		'40421  -  הגיונות קאנטיאניים: על תיאור ותיאוריה בגאוגרפיה  Kantian meditations: description & theory in Geography
',
		'40546  -  ערים היסטוריות באירופה ב  HISTORICAL CITIES IN EUROPE B
',
		'40567  -  שבריריות אקלים והיסטוריה  a
',
		'40622  -  מבוא לניהול פסולת מוצקה  INTRODUCTION TO SOLID WASTE MANAGEMENT
',
		'40681  -  סמינר במדיניות סביבתית  Environmental policy seminar
',
		'40732  -  סוגיות חדשות במחקר העירוני והאזורי  New issues in urban and regional research
',
		'40788  -  שטחים פתוחים בישראל סוגיות עיקריות  OPEN SPACES IN ISRAEL
',
		'40832  -  תכנון בדרום הגלובלי  Planning in the global south
',
		'40837  -  תכנות מרחבי בפייתון  Spatial computing in Python
',
		'40881  -  הממשקים שבין לימודי תקשורת למשבר האקלים  Productive Pathways for Climate Science, Policy and Society: Creative Climate Communications
',
		'40883  -  מדיניות ניהול אסונות טבע  The Policy and Practice of Disaster Risk Reduction and Response
',
		'40981  -  נחלים עירוניים אתגרים והזדמנויות  Urban streams challenges and opportunities
',
		'40996  -  ערים חכמות מציאות בהתהוות  Smart cities emerging reality
',
		'40102  -  מבוא לסובב הפיזי  GEO
',
		'40115  -  מבוא לסטטיסטיקה לגאוגרפים א  Introduction to statistics A
',
		'40130  -  גאוגרפיה עירונית  Urban Geography
',
		'40340  -  מסדי נתונים SQL לגיאוגרפיה  SQL databases for Geography
',
		'40422  -  גישות למדיניות סביבתית במרחב  Different approaches to environmental policies
',
		'40733  -  יסודות הסטטיסטיקה המרחבית  Foundations of spatial statistics
',
		'40834  -  סדנא בממ"ג ראסטרי  Workshop in Raster GIS
',
		'40942  -  גיאואינפורמטיקה ב  Geoinformatics B
',
		'40505  -  ניסויים במרחב: גאוגרפיה של דיור בישראל  Spatial experiments in Israel: Geographies of housing and home
',
		'40636  -  המרחב כתשתית: קהילות וקונפליקטים עירוניים  Space as infrastructure: Communities and urban conflicts
',
		'40933  -  עולם משתנה  A changing world
',
		'40124  -  היבטים חברתיים של ממ"ג: תיאוריה ופרקטיקה  Social Aspects of GIS: Theory and Practice
',
		'40650  -  עיר וחברה  City and society
',
		'40769  -  קליניקה אורבנית התמחות מעשית בתכנון חברתי  Urban clinic internship in social planning
',
		'40858  -  צדק מרחבי ועירוניות  Spatial justice and cities
',
		'40953  -  שלטון מקומי ופיתוח עירוני  Local government and urban development
',
		'40971  -  עיצוב המרחב בישראל  The creation of space in Israel
',
		'40698  -  סיור לימודי ברומא  A field trip to Rome
',
		'40990  -  סיור לימודי לרומא תשפא  A field trip to Rome
',
		'40940  -  הדרכה אישית  Personal Instruction
',
		'40811  -  אולפן בתכנון ומדיניות עירונית אסטרטגית  Ulpan in strategic urban policy and planning
',
		'40860  -  אולפן בתכנון סביבתי  Workshop in environmental planning
',
		'54050  -  מפגש לתלמידי גמלא  A meeting for Gamla students
',
		'49801  -  יישומי D3 MAP AUTOCAD לתכנון עירוני  AUTO CAD MAP
',
		'49805  -  מזרח ירושלים: מדיניות, כלכלה וחברה  East Jerusalem: policy, the economy, and society
',
		'49812  -  תכנון  הלכה למעשה  PLANNING PROCEDURE
',
		'49817  -  פרוגרמות ומדיניות קרקעית בישראל  PLANNING PROGRAMS AND LAND POLICY IN ISRAEL
',
		'49825  -  מבוא להנדסת תחבורה  Introduction to Transportation Engineering
',
		'49828  -  תכנון תחבורה ציבורית  מהלכה למעשה  PUBLIC TRANSPORT PLANNING PRACTICE
',
		'49854  -  סמינר מכוני  DEPT. SEMINAR
',
		'49822  -  אולפן בעריכת הנחיות מרחביות לישוב מוגדר  Writing Urban Design Guidelines for a Specific Town
',
		'49883  -  אולפן בתכנון ועיצוב אזורי מגורים חדשים  PLANNING&DESIGN OF NEW RESIDENTIAL NEIGHBORHOODS
'
];
HUJI_courses_lists['הפקולטה לחקלאות'] = 
[
		'71033  -  חקלאות הצומח בישראל  PLANTBASED AGRICULTURE IN ISRAEL
',
		'71075  -  הלכות התלויות בארץ  LAND AND AGRICULTURE IN JEWISH LAW
',
		'71324  -  היער העירוני  גידול וממשק  URBAN TREE GROWTH AND MANAGEMENT
',
		'71341  -  מדיניות שמירת שטחים פתוחים  תיכנון וחקיקה  OPEN SPACE PRESERVATION: LEGISLATION & PLANNING
',
		'71346  -  ביולוגיה של התא הצמחי  BIOLOGY OF THE PLANT CELL
',
		'71426  -  פיזיולוגיה של צמחים בתנאי עקה  PHYSIOLOGY OF PLANTS UNDER STRESS
',
		'71012  -  יסודות הגנטיקה  FUNDAMENTAL GENETICS
',
		'71034  -  גנטיקה מולקולרית  MOLECULAR GENETICS
',
		'71065  -  מבוא לביולוגיה מולקולרית  INTRODUCTION TO MOLECULAR BIOLOGY
',
		'71304  -  מבוא לחישה מרחוק של צמחיה  INTRODUCTION TO REMOTE SENSING OF VEGETATION
',
		'71449  -  יסודות בקרת הפריחה  physiology and molecular biology of flowering
',
		'71048  -  מבוא למדעי הצמח אנטומיה של צמחי הזרע  INTRODUCTION TO PLANT SCIENCEPLANT ANATOMY
',
		'71303  -  עשבים רעים והדברתם  WEED CONTROLPRINCIPLES
',
		'71332  -  מעבדה בתכנון ניסויים למדעי הצמח בחקלאות  EXPERIMENTAL DESIGN FOR PLANT SCIENCE IN AGRICULTURE
',
		'71176  -  היער העירוני  תיכנון ושימור  THE URBAN FOREST PLANNING & CONSERVATION
',
		'71410  -  ביולוגיה וגידול הדרים ועצ"פ סובטרופיים  BIOLOGY & PRODUCTION OF CITRUS & SUBTROPICAL FRU
',
		'71402  -  פרוסמינר במדעי הצמח בחקלאות  PROSEMINAR IN PLANT SCIENCES IN AGRICULTURE
',
		'65125  -  אנדוקרינולוגיה של האדם  HUMAN ENDOCRINOLOGY
',
		'65128  -  תורת המזון  FOOD SCIENCE
',
		'65130  -  אנטומיה ופיזיולוגיה של האדם חלק א  HUMAN ANATOMY AND PHYSIOLOGY PART I
',
		'65216  -  כשרות ושבת  KASHRUT AND THE SABBATH
',
		'65223  -  תזונה במאמץ גופני וספורט  NUTRITION IN EXERCISE AND SPORT
',
		'65307  -  פתולוגיה וקליניקה של מחלות א  DISEASE: PATHOLOGY & CLINICAL MANIFESTATIONS (A)
',
		'65320  -  דיאטטיקה א  DIETETICS (A)
',
		'65324  -  נוירואנדוקרינולוגיה של תזונת האדם  NEUROENDOCRINOLOGY OF HUMAN NUTRITION
',
		'65641  -  התעללות והזנחה בילדים היבטים תזונתיים  CHILD MALTREATMENT: NUTRITIONAL ASPECTS
',
		'65646  -  השמנה והפרעות אכילה  אטיולוגיה פתולוגיה וגישות טיפול  APPROACHES IN THE TREATMENT OF OBESITY AND EATING DISORDERS
',
		'65648  -  תזונת האדם  מיקרונוטריינטים  HUMAN NUTRITION  MICRONUTREINTS
',
		'71265  -  התפתחות ידע מדעי והשפעותיו על המלצות תזונתיות  FROM SCIENTIFIC RESEARCH TO NUTRITIONAL RECOMMENDATIONS
',
		'65323  -  תרגיל בדיאטטיקה ב  EXERCISE IN DIETETICS (B)
',
		'65313  -  מבוא לאפידמיולוגיה  INTRODUCTION TO EPIDEMIOLOGY
',
		'65213  -  מעבדה בתזונת האדם  HUMAN NUTRITION  LAB
',
		'65219  -  מעבדה באנטומיה ופיזיולוגיה של האדם  HUMAN ANATOMY & PHYSIOLOGY  LAB
',
		'65224  -  סדנת תזונה קלינית ברמת הבוגר  CLINICAL NUTRITION WORKSHOP BACHELOR LEVEL
',
		'71113  -  השפעת תנאי עקה על גידולים חקלאיים  STRESS EFFECTS ON AGRICULTURAL CROPS
',
		'71974  -  חקלאות מדייקת  PRECISION AGRICULTURE
',
		'73532  -  התורשה של התאמה פיזיולוגית בגידולי תבואות  THE GENETICS OF CROP PHYSIOLOGIAL ADAPTATION
',
		'71194  -  סמינר מוסמך בגידולי שדה וירקות  M.S.c SEMINAR IN FIELD AND VEGETABLE CROPS
',
		'71999  -  השפעות גומלין בין גנוטיפ, סביבה וממשק אגרוטכני בטיפוח דגניים  GENOTYPES (G), ENVIRONMENTS (E) AND MANAGEMENT (M) INTERACTION IN CEREALS BREEDING
',
		'71933  -  התהוות הפרי והתפתחותו  FRUIT SET AND DEVELOPMENT
',
		'71111  -  ביולוגיה התפתחותית של הגפן  DEVELOPMENTAL BIOLOGY OF GRAPEVINES
',
		'71950  -  סדנת מחקר במטעים וצמחי נוי  RESEARCH APPROACHES IN HORTICULTURE
',
		'71117  -  וירוסים כגורמי מחלות בצמחים  VIRUSES AS PLANT PATHOGENS
',
		'71127  -  פתולוגיה של חרקים  INSECT PATHOLOGY
',
		'71160  -  גנטיקה של פטריות פתוגניות לצמחים  GENETICS OF FUNGAL PLANT PATHOGENS
',
		'71501  -  מבוא לאנטומולוגיה  INTRODUCTION TO ENTOMOLOGY
',
		'71509  -  סוגיות מרכזיות באגרואקולוגיה ובריאות הצמח  CENTRAL TOPICS IN AGROECOLOGY AND PLANT HEALTH
',
		'71512  -  יישום שיטות ואמצעים להדברת פגעים בצמחים  PESTICIDE APPLICATION AND PEST MANAGEMENT
',
		'71527  -  אנטומולוגיה של היער  FOREST ENTOMOLOGY
',
		'71530  -  אקולוגיה כללית  ECOLOGY
',
		'71915  -  היבטים אפידמיולוגיים וסביבתיים של מחלות צמחים  ENVIRONMENTAL EPIDEMIOLOGICAL ASPECTS OF PLAN
',
		'73540  -  פיזיולוגיה וביולוגיה מולקולרית של חיידקים  PHYSIOLOGY & MOLECULAR BIOLOGY OF BACTERIA
',
		'71521  -  אקולוגיה של חרקים  INSECT ECOLOGY
',
		'71193  -  סמינר מוסמך באגרואקולוגיה ובריאות הצמח  M.S.c SEMINAR IN AGROECOLOGY AND PLANT HEALTH
',
		'71506  -  מעבדה באנטומולוגיה (לשאינם מתמחים)  LABORATORY IN ENTOMOLOGY (NON MAJORS)
',
		'71057  -  מיקרוביולוגיה  MICROBIOLOGY
',
		'71519  -  פרקים נבחרים בפיטופתולוגיהמצומצם  SELECETED TOPOCS IN PHYTOPATOLOGY
',
		'71524  -  גידול דבורים ומוצרי מכוורת  APICULTURE
',
		'71986  -  סדנהמחלות בעצי פרי נשירים וגפנים  WORKSHOP DISEASES OF DECIDUOUS TREES AND GRAPEVINES
',
		'71504  -  סמינריון אגרואקולוגיה ובריאות הצמח  MINISEMINAR IN AGROECOLOGY AND PLANT HEALTH
',
		'71609  -  כימיה של הסביבה  ENVIRONMENTAL CHEMISTRY
',
		'71615  -  תהליכי התהוות הקרקע  SOIL FORMATION
',
		'71620  -  מצעי גידול וסביבת השורשים  GROWTH MEDIA AND THE ROOT ENVIRONMENT
',
		'71016  -  עקרונות ההשקייה  IRRIGATION PRINCIPLES
',
		'71024  -  כימיה פיזיקלית  PHYSICAL CHEMISTRY
',
		'71032  -  פיזיקה ב (מורחב)  PHYSICS (B) (EXTENDED))
',
		'71062  -  פיזיקה למדעי החקלאות ב  PHYSICS FOR AGRONOMY MAJORS B
',
		'71601  -  יסודות מדע ההשקייה  FUNDAMENTALS OF IRRIGATION SCIENCE
',
		'71607  -  יסודות הנדסת השקייה  FUNDAMENTALS IN IRRIGATION ENGINEERING
',
		'71617  -  מבוא לגאולוגיה לחקלאות  INTRODUCTION TO GEOLOGY FOR AGRICULTURE STUDENTS
',
		'71622  -  פיזיקה של המים בקרקע  PHYSICS OF SOIL WATER
',
		'71625  -  משאבי המים של ישראל וניהולם  ISRAEL WATER RESOURCES AND THEIR MANAGMENT
',
		'71631  -  חישה מרחוק של תהליכים ברצף קרקעצמחאטמוספירה  REMOTE SENSING OF SOILPLANTATMOSPHERE PROCESSES
',
		'71133  -  סמינר מוסמך במדעי הקרקע והמים  M.S.c SEMINAR IN SOIL AND WATER SCIENCES
',
		'71103  -  מיקרומטאורולוגיה חקלאית  AGRICULTURAL MICROMETEOROLOGY
',
		'71603  -  מליחות המים והקרקע  SOIL AND WATER SALINITY
',
		'71973  -  כימיה פיזיקלית ותופעות שטח פנים בקרקע  PHYSICALCHEMISTRY AND SURFACE PHENOMENA IN SOIL
',
		'65027  -  תגבור בחדו"א I  COMPLEMENTARY SUBJECTS IN MATH
',
		'71019  -  מבוא לכלכלה  ECONOMICS
',
		'71138  -  תכנון ניסויים וסטטיסטיקה לתלמידי מחקר  EXPERIMENTAL DESIGN AND ADVANCED STATISTICS FOR RESEARCH STUDENTS
',
		'71158  -  תאוריה מיקרו כלכלית  MICRO ECONOMIC THEORY
',
		'71163  -  כלכלת הצמיחה והפיתוח  ECONOMICS OF GROWTH AND DEVELOPMENT
',
		'71702  -  כלכלת משאבי טבע  NATURAL RESOURCE ECONOMICS
',
		'71706  -  מבוא לניהול פיננסי ומימון חברות  INTRODUCTION TO FINANCIAL MANAGEMENT
',
		'71719  -  שיווק תוצרת חקלאית  MARKETING OF AGRICULTURAL PRODUCTS
',
		'71721  -  כלכלת החקלאות הישראלית  ECONOMY OF ISRAELI AGRICULTURE
',
		'71730  -  סמינר בשיווק מעשי  APPLIED MARKETING SEMINAR
',
		'71733  -  ניהול השיווק  MARKETING MANAGEMENT
',
		'71736  -  מאקרו כלכלה  MACRO ECONOMICS
',
		'71741  -  מבוא לסוציולוגיה  INTRODUCTION TO SOCIOLOGY
',
		'71753  -  משפט אזרחי  חקלאי  CIVIL AND AGRICULTURAL LAW
',
		'71772  -  ניתוח דוחות כספיים  ANALYSIS OF FINANCIAL REPORTS
',
		'71965  -  סטטיסטיקה רבמשתנית לשיווק וחקלאות  MULTIVARIATE DATA ANALY FOR MARKETING/AGRICULTURE
',
		'71983  -  אסטרטגיה שיווקית  MARKENTING STRATEGY
',
		'73509  -  תורת המשחקים  GAME THEORY
',
		'71013  -  מבוא לסטטיסטיקה ותכנון ניסויים  INTRODUCTION TO STATISTICS AND EXPERIMENTAL DESIGN
',
		'71022  -  חשבון דיפרנציאלי ואינטגרלי א  CALCULUS FOR LIFE SCIENCE MAJORS A
',
		'71025  -  מבוא להסתברות וסטטיסטיקה תיאורית  INTRODUCTION TO PROBABILITY AND DESCRIPTIVE STATISTICS
',
		'71054  -  חשבון דיפרנציאלי ואינטגרלי א  CALCULUS (A)
',
		'71709  -  מבוא לכלכלה א  INT. TO ECONOMIC A
',
		'71723  -  מבוא לסטטיסטיקה ועיבוד נתונים א  INTRODUCTORY STATISTICS & DATA PROCESSING A
',
		'71732  -  תורת הצרכן  CONSUMER THEORY
',
		'71742  -  תורת הרווחה  WELFARE THEORY
',
		'71745  -  חדו"א II לכלכלנים  CALCULUS II FOR ECONOMICS
',
		'71748  -  אלגברה לינארית ב  LINEAR ALGEBRA B
',
		'71989  -  אקונומטריקה א  ECONOMETRICS A
',
		'71196  -  סמינר מחקרי א בכלכלת סביבה וניהול  RESEARCH SEMINAR A IN ENV. ECON.& MAN. (THESIS)
',
		'71058  -  הדרכה אישית בשיטות סטטיסטיות  PERSONAL CONSULTING IN STATISTICAL METHODS
',
		'71804  -  מבוא לאמבריולוגיה  INTRODUCTION TO EMBRYOLOGY
',
		'71806  -  פיזיולוגיה של בע"ח ב  ANIMAL PHYSIOLOGY II
',
		'71810  -  אנדוקרינולוגיה כללית  GENERAL ENDOCRINOLOGY
',
		'71813  -  גידול בקר לבשר  BEEF CATTLE HUSBANDRY
',
		'71821  -  תחומי ידע ועשייה במדעי בעלי חיים  CENTRAL TOPICS IN ANIMAL SCIENCE
',
		'71825  -  גידול סוסים  EQUINE MANAGEMENT
',
		'71832  -  עקרונות הטיפול התרופתי בבעלי חיים  PRINCIPALS OF DRUG TREATMENT IN ANIMALS
',
		'71838  -  זואוגאוגרפיה של חולייתנים בישראל  THE ZOOGEOGRAPHY OF VERTEBRATES IN ISRAEL
',
		'71840  -  רווחת חיות משק  animal welfare
',
		'71846  -  מחלות בקר וצאן  DISEASES OF SHEEP AND CATTLE
',
		'71852  -  אקולוגיה מיקרוביאלית במערכות מידגה  MICROBIAL ECOLOGY IN AQUACULTURE SYSEMS
',
		'71822  -  ממשק והזנת עופות  poultry nutrition and managemnt
',
		'71842  -  הזנת מעלי גירה  RUMINANTS NUTRITION
',
		'71816  -  מבוא לחקלאות ימית  INTRODUCTION TO MARINECULTURE
',
		'71004  -  מבוא לזואולוגיה  INTRODUCTION TO ZOOLOGY
',
		'71812  -  גידול בקר לחלב  DAIRY CATTLE HUSBANDRY
',
		'71836  -  ביולוגיה ואקולוגיה של דגים  FISH BIOLOGY AND ECOLOGY
',
		'71807  -  פרוסמינר במדעי בעליחיים  PROSEMINAR IN ANIMAL SCIENCES
',
		'73502  -  פרקים נבחרים בביולוגיה מולקולרית של צמחים  PLANT MOLECULAR BIOLOGY
',
		'73527  -  שונות ברצף הDNA ויישומיהם  DNA SEQUENCES: VARIATION & APPLICATIONS
',
		'71961  -  סמינר מוסמך בגנטיקה והשבחה  M.S.c SEMINAR IN GENETICS & BREEDING
',
		'71994  -  סדנה א (גנטיקה והשבחה)  WORKSHOP (GENETICS & BREEDING)
',
		'71404  -  בשר מתורבת ותחליפי בשר מהצומח  CULTIVATED AND PLANTBASED MEAT
',
		'71422  -  סוגיות נבחרות בניהול פרויקטים בתעשיית החקלאות והסביבה  CENTRAL TOPICS IN PROJECTS MANAGEMENT AND ENVIRONMENT IN AGRICULTURE
',
		'71428  -  אנליזה של מזון  FOOD ANALYSIS
',
		'71433  -  פולימרים ויישומיהם לתעשיית המזון  POLYMERS AND THEIR APPLICATION FOR THE FOOD INDUSTRY
',
		'71439  -  תעשיות מזון  FOOD INDUSTRIES
',
		'71445  -  מבוא למדעי המזון  עקרונות ותהליכים  INT. TO FOOD SCIENCE  PRINCIPLES & PROCESSES
',
		'71451  -  מתודולוגיה של חישת מזון  METHODOLOGY OF SENSORY EVALUATION OF FOOD
',
		'71473  -  היבטים של קיימות במזון  SUSTAINABILITY IN THE FOOD INDUSTRY
',
		'71478  -  יסודות בטוקסיקולוגיה ופרמקולוגיה  PRINCIPALS IN TOXICOLOGY AND PHARMACOLOGY
',
		'71066  -  עקרונות בכימיה אורגנית א  PRINCIPLES IN ORGANIC CHEMISTRY A
',
		'71079  -  ביוכימיה למדעי החקלאות  BIOCHEMISTRY
',
		'71425  -  תרגיל בניהול מיזם בתעשיית החקלאות והסביבה  EXERCISE PROJECT MANAGEMENT IN THE AGRICULTURE AND ENVIRONMENT INDUSTRY
',
		'71435  -  יחידות פעולה בטכנולוגיה והנדסת מזון ב  UNIT OPERATION IN FOOD TECH. AND FOOD ENG. B
',
		'71448  -  תרגיל בניהול מיזם בתעשייה  PROJECT MANAGEMENT IN THE INDUSTRY EXERCISE
',
		'71073  -  מעבדה בעקרונות הכימיה  CHEMICAL PRINCIPLES  LAB
',
		'71081  -  מעבדה בביוכימיה  BIOCHEMISTRY  LAB. COURSE
',
		'71429  -  מעבדה בכימיה ואנליזה של מזון  LAB. IN FOOD CHEMISTRY & IN FOOD ANALYSIS
',
		'71461  -  פיתוח מוצרי מזון חדשים  NEW PRODUCT DEVELOPMENT
',
		'71453  -  תכונות פיזיקליות של מזונות  PHYSICAL PROPERTIES OF FOODS
',
		'71436  -  פרוסמינר במזון ותזונה  PROSEMINAR (FOOD)
',
		'71123  -  אובדן ובזבוז מזון  FOOD LOSS AND WASTE
',
		'71934  -  בקרה של דגרדצית החלבון בתא  CONTROL OF CELL PROTEIN DEGRADATION
',
		'71941  -  תזונת החולה במצב קריטי  CRITICAL CARE NUTRITION
',
		'73508  -  תזונת ילדים  PEDIATRIC NUTRITION
',
		'73523  -  אינטראקציה בין תזונה להתבטאות גנטית  INTERACTION BETWEEN NUTRIENTS AND GENES
',
		'73542  -  תזונה בגיל המבוגר  GERIATRIC NUTRITION
',
		'73550  -  הגישות החדשות להתמודדות עם השמנה  new approaches to coping with obesity
',
		'71136  -  פרקים נבחרים במבנה ותיפקוד של קולטני GPCR  SELECTED TOPICS IN STRUCTURE AND FUNCTION OF GPCR
',
		'73537  -  כימיה של פחמימות(סדנה) 
',
		'71101  -  מעבר אותות בצמחים  SIGNAL TRANSDUCTION IN PLANTS
',
		'71917  -  התבגרות פיסיולוגית, הזדקנות ומוות מתוכנת בצמחים  AGING AND PROGRAMMED CELL DEATH IN PLANTS
',
		'71120  -  סמינר מוסמך במדעי הצמח בחקלאות  SEMINAR IN PLANT SCIENCES IN AGRICULTURE
',
		'71252  -  מעבדה באגרוטק  AGROTEC LABORATORY
',
		'71254  -  מבוא לעיבוד וניתוח תמונה  INTRODUCTION TO IMAGE PROCESSING AND ANALYSIS
',
		'73504  -  סמינר מוסמך באיכות הסביבה ומשאבי טבע בחקלאות  M.S.c SEMINAR IN AGRIC. & ENVIRONMENTAL QUALITY
',
		'65502  -  תורת היין  WINE KNOWLEDGE PROGRAM
',
		'65504  -  יזמות אינטרנטית  WEB ENTREPRENEURSHIP
',
		'65507  -  התנהגות ארגונית  ORGANIZATIONAL BEHAVIOR
',
		'65510  -  תזונה ופיזיולוגיה  מבואות  INTRODUCTION TO HUMAN PHYSIOLOGY & NUTRITION
',
		'65514  -  שיווק, במלונאות ובתיירות  MARKETING FOR HOTELS & TOURISM
',
		'65519  -  ניהול מערכות הזנה  FOOD SERVICE MANAGEMENT
',
		'65524  -  עקרונות הביוכימיה והביולוגיה של התא  BASIC PRINCIPLES OF CELLULAR BIOLOGY & BIOCHEMIS
',
		'65531  -  סוגיות עדכניות בתזונה ובריאות  CHAPTERS IN DIETETIECS
',
		'65534  -  תיירות עירונית וכפרית  URBAN & RURAL TOURISM
',
		'65539  -  ניהול ארועים ומסעדות  BANQUET & RESTAURANT MANGEMENT
',
		'65541  -  ניהול תעופתי וסוכנויות נסיעות  AVIATION & TRAVEL AGENCY MANAGEMENT
',
		'65529  -  תורת המזון ואומנות הבישול  FOOD SCIENCE AND CULINARY ARTS
',
		'65544  -  מבוא להכשרה מעשית בתעשיית האירוח  INTRO: TRAINING IN THE HOSPITALITY INDUSTRY
',
		'65705  -  מבוא לרפואה התנהגותית של בע"ח  CLINICAL BEHAVIORAL MEDICINE FOR SMALL ANIMALS
',
		'65711  -  רפואה וטרינרית במבחן: היסטוריה, תרבות, ואתיקה של בעלי חיים  VET. MEDICINE: HISTORY,CULTURE & ANIMAL ETHICS
',
		'65713  -  ממשק חיות משק  RUMINANT HUSBANDRY
',
		'65716  -  אמבריולוגיה וטרינרית  VETERINARY EMBRYOLOGY
',
		'65721  -  קרדיולוגיה וטרינרית מורחב  VETERINARY CARDIOLOGY: ADVANCED LEVEL
',
		'65727  -  טוכסיקולוגיה וטרינרית  VETERINARY TOXICOLOGY
',
		'65732  -  פרקים בפתולוגיה קלינית וטרינרית  CHAPTERS IN VETERINARY CLINICAL PATHOLOGY
',
		'65734  -  הרדמה וטרינרית ב  VETERINARY ANESTHESIOLOGY (B)
',
		'65737  -  בריאות ציבור וטרינרית עקרונות ותחיקה  VETERINARY PUBLIC HEALTH PRINCIPLES AND LEGISLATION
',
		'65742  -  רפואה וכירורגיה של חיות משק א  RUMINANT MEDICINE AND SURGERY (A)
',
		'65744  -  תחיקה וטרינרית  VETERINARY LAW
',
		'65751  -  רפואה וכירורגיה של חיות משק ב  RUMINANT MEDICINE AND SURGERY (B)
',
		'65753  -  רפואה וכירורגיה של סוסים ב  EQUINE MEDICINE AND SURGERY (B)
',
		'65757  -  רפואת צפורי נוי וחיות אקזוטיות  EXOTIC ANIMAL AND BIRD MEDICINE
',
		'65766  -  רפואה התנהגותית לחיות מחמד  BEHAVIORAL MEDICINE OF SMALL ANIMALS
',
		'65773  -  רפואה פנימית של חיות קטנות א  ANIMAL INTERNAL MEDICINE A SMALL
',
		'65784  -  טריוגנולוגיה של חיות משק  RUMINANT THERIOGENIOLOGY
',
		'65812  -  מבוא להרדמה א  INTRODUTION TO ANESTHESIOLOGY (A)
',
		'65817  -  בקטריולוגיה ומיקולוגיה וטרינרית ב  VETERINARY BACTERIOLOGY AND MYCOLOGY B
',
		'65820  -  פרקים נבחרים ברפואת סוסים  ADVANCED TOPICS IN EQUINE MEDICINE
',
		'65832  -  טריוגנולוגיה  THERIOGENIOLOGY
',
		'65843  -  בריאות ציבור ושירותים וטרינרים ציבוריים  PUBLIC HEALTH AND VETERINARY PUBLIC SERVICES
',
		'65847  -  כתיבה מדעית ב  הצעות מחקר  SCIENTIFIC WRITING B  RESEARCH PROPOSAL
',
		'65850  -  רפואה פנימית מורחב  ADVANCED INTERNAL MEDICINE
',
		'65703  -  פיזיולוגיה וטרינרית  VETERINARY PHYSIOLOGY
',
		'65729  -  סמינר ג ברפואה וטרינרית  SEMINAR  VETERINARY MEDICINE (C)
',
		'65824  -  הצגת מקרה  CASE PRESENTATION
',
		'65787  -  מעבדה בכירורגיה מורחב  SURGERY LABORATORY COURSE
',
		'65702  -  היסטולוגיה וטרינרית  VETERINARY HISTOLOGY
',
		'65717  -  פתולוגיה של המערכות א  PATHOLOGY OF THE SYSTEMS (A)
',
		'65719  -  פתולוגיה כללית  GENERAL PATHOLOGY
',
		'65770  -  שיטות קליניות של חיות משק  FARM ANIMAL CLINICAL METHODS
',
		'65777  -  כירורגיה חיות קטנותאורטופדיה  SMALL ANIMAL SURGERYORTHOPEDICS
',
		'65793  -  כירורגיה חיות קטנות רקמה רכה  SMALL ANIMAL SURGERYSOFT TISSUE
',
		'65823  -  שיטות קליניות  CLINICAL METHODS
',
		'65761  -  רפואת וכירורגיה סוסים בלוק 4 שבועות  EQUINE MEDICINE AND SURGERY 4 WEEK ROTATION
',
		'65840  -  התנסות מעשית במשק חלב  PRACTICAL EXPERIENCE ON A DAIRY FARM
',
		'65707  -  חטיבת בחירה שבוע  ELECTIVE BLOCK1 WEEK
',
		'65722  -  נוירולוגיה בלוק שבוע  NEUROLOGY 1WEEK ROTATION
',
		'65739  -  רפואת חיות מחמד בלתי מתורבתות בלוק שבוע  NONDOMESTICATED PET MEDICINE 1 WK ROTATION
',
		'65746  -  אונקולוגיה בלוק שבוע  ONCOLOGY 1WEEK ROTATION
',
		'65755  -  רפואת שיניים בחיות מחמד בלוק שבוע  VETERINARY DENTISTRY 1 WK ROTATION
',
		'65760  -  רפואה אמבולטורית של חיות משק בלוק שבועיים  RUMINANT AMBULATORY MEDICINE 2 WEEK ROTATION
',
		'65763  -  רפואת חיות קטנות בלוק 6 שבועות  SMALL ANIMAL MEDICINE 6 WEEK ROTATION
',
		'65767  -  בריאות הציבור בלוק שבועיים  PUBLIC HEALTH 2 WEEK ROTATION
',
		'65769  -  רפואת חיות בר וגני טבע בלוק שבועיים  ZOO AND WILDLIFE MEDICINE 2 WEEK ROTATION
',
		'65778  -  מרפאה חיות קטנות בלוק שבועיים  SMALL ANIMAL CLINIC 2 WEEK ROTATION
',
		'65782  -  חטיבת בחירה אבלוק שבועיים  ELECTIVE ROTATION (A)2 WEEKS
',
		'65786  -  הרדמה בלוק שבועיים  ANESTHESIOLOGY 2 WEEK ROTATION
',
		'65790  -  רפואת חירום בלוק 6 שבועות  EMERGENCY MEDICINE 6WEEK ROTATION
',
		'65796  -  רפואת חיות משק בלוק שבועיים בחירה  LARGE ANIMAL MEDICINE 2 WEEK ELECTIVE ROTATION
',
		'65798  -  רפואת חיות קטנות בלוק שבועיים בחירה  SMALL ANIMAL MEDICINE 2 WEEK ELECTIVE ROTATION
',
		'65801  -  רפואת עופות בלוק שבועיים בחירה  POULTRY MEDICINE 2 WEEK ELECTIVE ROTATION
',
		'65804  -  רדיולוגיה בלוק שבועיים בחירה  RADIOLOGY 2 WEEK ELECTIVE ROTATION
',
		'65806  -  רפואת חרום בלוק שבועיים בחירה  EMERGENCY MEDICINE 2 WEEK ELECTIVE ROTATION
',
		'65808  -  הרדמה בלוק שבועיים בחירה  ANESTHESIOLOGY 2 WEEK ELECTIVE ROTATION
',
		'65822  -  דרמטולוגיה בלוק שבועיים  DERMATOLOGY 2 WEEK ROTATION
',
		'65829  -  פיקוח על חוק צער בעלי חיים רוטציה  ENFORCEMENT OF THE ANIMAL PROTECTION LAW ROTATION
',
		'65842  -  רפואת חיות מחמד בלתימתורבתות בלוק שבועיים  NONDOMESTICATED PET MEDICINE 2 WEEK ROTATION
',
		'65857  -  רפואת חיות בר וגני חיות בלוק שבוע  ZOO AND WILDLIFE MEDICINE 1 WEEK ROTATION
',
		'65859  -  רדיולוגיה בלוק שבוע בחירה  RADIOLOGY 1 WK ELECTIVE ROTATION
',
		'65833  -  בחינת גמר רפואה וכירורגיה חיות קטנות  FINAL EXAMSMALL ANIMAL MEDICINE & SURGERY
',
		'65835  -  בחינת גמר רפואה וכירורגיה של חיות משק  FINAL EXAMRUMINANT MEDICINE AND SURGERY
',
		'73902  -  ביוטכנולוגיה בחקלאות  BIOTECHNOLOGY FOR AGRICULTURAL CROP PRODUCTION
',
		'73904  -  פיסיולוגיה של הצמח למתקדמים  CONTEMPORARY APPROACHES TO PLANT PHYSIOLOGY
',
		'73909  -  ביולוגיה וטכנולוגיה לאחר הקטיף  POSTHARVEST BIOLOGY AND TECHNOLOGY
',
		'73921  -  פיסיולוגיה וייצור גידולי שדה  CROP PHYSIOLOGY & PRODUCTION
',
		'73926  -  הדברה משולבת  INTEGRATED PEST MANAGEMENT
',
		'73906  -  תכנון ניסויים וניתוחים סטטיסטים  EXPERIMENTAL DESIGN AND STATISTICAL ANALYSES
',
		'73936  -  סדנא מעשית בממשק גידולי שדה וירקות  PRACTICAL WORKSHOP IN CROP MANAGEMENT
',
		'73914  -  ייצור בבתיצמיחה  CURRENT GREENHOUSE CROP PRODUCTION
',
		'73922  -  גידולי ירקות למתקדמים  ADVANCES IN VEGETABLE PRODUCTION
',
		'73928  -  ביולוגיה רפרודוקטיבית של מיני פרי  REPRODUCTIVE BIOLOGY OF FRUIT CROPS
',
		'71121  -  סוגיות נבחרות באפיגנטיקה  TOPICS IN EPIGENETICS
',
		'71167  -  פיזיולוגיה ומטבוליזם של פרת חלב בתקופת מעבר  THE TRANSITION COW PHYSIOLOGY AND METABOLISM
',
		'71170  -  פרקים באנדוקרינולוגיה  TOPICS IN ENDOCRINOLOGY
',
		'71953  -  יחסים בין מיקרואורגניזמים ופרוקי רגלים  INTERACTION BETWEEN MICROORGANISMS AND ARTHROPODS
',
		'71157  -  סמינר מוסמך במדעי בעליחיים ווטרינריה  M.S.c SEMINAR IN ANIMAL SCIENCES & VETERINARY
',
		'71946  -  שיטות להערכת איכות מים במערכות מדגה  WATER QUALITY ASSESSMENTIN AQUACULTURE SYSTEMS
',
		'71107  -  סדנה בציטומריית זרימה מעשית  HANDSON FLOW CYTOMETRY WORKSHOP
',
		'71154  -  אוספי טבע וגני חיות  NATURAL COLLECTIONS AND ZOOS
',
		'73518  -  מיקרוביוטת המעי של בעלי חיים  THE GUT MICROBIOTA OF ANIMALS
',
		'65904  -  אפידמיולוגיה של מחלות זיהומיות באוכלוסיות בעלי חיים  EPIDEMIOLOGY OF INFECTIOUS DISEASES IN ANIMAL POPULATIONS
',
		'65907  -  "בריאות אחת"של מי הבריאות הזו בכלל?  ONE HEALTH : WHOSE HEALTH IS IT ANYWAY?
',
		'65909  -  רפואה וטרינרית רגולטורית ניהול סיכונים במצבי איודאות  RISK MANAGEMENT REGULATORY VETERINARY MEDICINE
',
		'73940  -  מורפולוגיה ופיסיולוגיה של גפן היין  MORPHOLOGY AND PHYSIOLOGY OF THE GRAPVINE
',
		'73943  -  היבטים מעשיים בגידול גפן  PRACTICAL ASPECTS OF GRAPE GROWING
',
		'73945  -  כימיה ויציבות של יין וניהול איכות היין  WINE CHEMISTRY, WINE STABILITY AND QUALITY MANAGEMENT
',
		'65017  -  פרס נובל שלי  MY NOBEL PRIZE
',
		'65012  -  תוכנית אמירים  כלכלה סביבה וניהול  SPECIAL HONORS PROGRAM
',
		'71207  -  מרעיון למוצר  ביוטכנולוגיה בישראל  FRON IDEA TO PRODUCT  BIOTECHNOLOGY IN ISRAEL
',
		'71217  -  מבוא לביוטכנולוגיה  קניין רוחני, חוק, אסטרטגיה וניהול  AN INTRODUCTION IN BIOTECHNOLOGY BUSINESS
',
		'71216  -  אנליזות מתקדמות בביואינפורמטיקה  ADVANCED ANALYSIS OF HIGHTHROUGHPUT EXPERIMENTS
',
		'71214  -  סמינריון בביוטכנולוגיה  MINISEMINAR IN BIOTECHNOLOGY
',
		'71219  -  מעבדה במיקרוביולוגיה יישומית  APPLIED MICROBIOLOGY LABORATORY
',
		'71211  -  שיטות הפרדה למקרו ומיקרומולקולות  CHROMATOGRAPHY OF MICRO AND MACROMOLECULES
',
		'71029  -  סדנת מבוא לביוטכנולוגיה  INTRODUCTION TO BIOTECHNOLOGY
',
		'71002  -  עברית  רמה 5  HEBREW  LEVEL 5
',
		'71010  -  עברית  בחינת פטור  HEBREW  EXEMPTION EXAM
',
		'71052  -  הבנת טקסטים באנגלית  מתקדמים א  READING ENGLISH FOR ACADEMIC PURPOSES  LOWER ADVANCES
',
		'71100  -  עבודת גמר  M.SC THESIS
',
		'71251  -  מבוא להיסטוריה ולפילוסופיה של המדע  INTRO. TO HISTORY AND PHILOSOPHY OF SCIENCE
',
		'71260  -  תרגיל מחקר  RESEARCH EXERCISE
',
		'71011  -  סדנה לשיפור בקיאות ומיומנויות באנגלית  ENGLISH PROFICIENCY WORKSHOP
',
		'71050  -  בטיחות  SAFETY REGULATION
'
];
HUJI_courses_lists['ביה"ס לעבודה סוציאלית'] = 
[
		'3003  -  מעברי חיים בראי קליני וחברתי  Social and clinical perspectives: Significant and traumatic life transitions
',
		'3007  -  שימוש לטוב/שימוש לרעה בסמים, התמכרויות וטיפול  Drug use@Misuse and Treatment
',
		'3012  -  שיקום והחלמה בבריאות הנפש: תיאוריה ופרקטיקה  Rehabilitation and recovery in mental health: theory and practice
',
		'3014  -  ידע מנסיון אישי כלי בקדום שינוי  Knowledge from personal experience  as a tool for promoting change
',
		'3020  -  הנחיית קבוצות  Group leading
',
		'3034  -  זוגיות  האתגר  The challenge of being a couple
',
		'3053  -  תיאוריות בהתפתחות הילד והמתבגר  Theories of child and adolescent development
',
		'3055  -  פרקטיקת מדיניות  בדרך לשינוי חברתי  Policy Practice: The Road to Social Change
',
		'3062  -  אזרחות טובה? מקומם של אנשים עם מוגבלויות בחברה הישראלית  Good citizenship? The place of people with disabilities in Israeli society
',
		'3073  -  מתודות ג טיפול כמפגש בין שני סובייקטים  Methods Third year  person to person therapy
',
		'3077  -  התעללות בילדים בפרספקטיבה משווה: המקרה של דרום קוריאה, גרמניה וישראל  Child maltreatment in international perspective: The case of South Korea, Germany and Israel
',
		'3106  -  פסיכולוגיה: מושגי יסוד  BASIC CONCEPTS IN PSYCHOLOGY
',
		'3110  -  איחוד משפחות: תובנות קליניות ולמדיניות  family reunification: clinical and policy lessons and insights
',
		'3116  -  מבוא למדינת הרווחה ב  THE DEVELOPMENT OF THE WELFARE STATE IN ISRAEL
',
		'3121  -  תורת האישיות: מושגי יסוד  BASIC CONCEPTS OF PERSONALITY
',
		'3128  -  יסודות הטיפול הנפשי: פרויד ופיתוחים מאוחרים  Fundamentals of Therapy: Freud and Later Developments
',
		'3131  -  יסודות המשפט וזכויות האדם  INTRODUCTION TO ISRAELI LAW AND TO HUMAN RIGHTS
',
		'3134  -  מעורבות חברתית  SOCIAL INVOLVEMENTAN INTROD. TO SW FIELDWORK
',
		'3139  -  המשפחה כיחידה חברתית  THE FAMILY AS A SOCIAL UNIT
',
		'3147  -  יחסים זוגיים: תאוריה, מחקר ופרקטיקה  Intimate Relationships: Theory, Research and Practice
',
		'3150  -  פסיכולוגיה חברתית  INTRODUCTION TO SOCIAL PSYCHOLOGY
',
		'3156  -  טיפול בשעת משבר: תיאוריה ויישום קליני  Crisis Intervention: Theory and Clinical Application
',
		'3158  -  עבודה קלינית מבוססת מנטליזציה  Mentalizationbased therapy and clinical interventions
',
		'3162  -  עבודה עם מצבים נפשיים ראשוניים על פי קליין וממשיכיה  Working with early mental states  Kleinian theory
',
		'3177  -  טיפול הוליסטי: מפגש בין גוף/נפש/רוח  HOLISTIC THERAPY: THE INTERFACE OF MIND/BODY/SPI
',
		'3190  -  מיניות בגיל ההתבגרות: היבטים תיאורטיים ומעשיים  Sexuality in adolescence: theoretical and practical aspects
',
		'3209  -  גבריות סוגיות יסוד בטיפול ב"מגדר הנאלם  Masculinity Basic Concepts in the Treatment of a Muted Gender
',
		'3216  -  הפנימייה ככלי טיפולי בילדים המוצאים מביתם  Residential Care as A Therapeutic Milieu for Children separated from their home
',
		'3220  -  סיפורים וזיקנה: גרונטולוגיה נרטיבית  Stories and old age: Narrative gerontology
',
		'3223  -  סוגיות בקיימות: בין צדק סביבתי לצדק חברתי  Approaches to Sustainability: Between Environmental Justice and Social Justice
',
		'3230  -  טראומה וביבליותרפיה  TRAUMA AND BIBLIOTHERAPY
',
		'3235  -  אמנותנכות ותיאטרון קהילתי  Disability Art and community theatre
',
		'3251  -  התמודדות עם טראומה ומצבי חירום  Coping with trauma and crisis situations
',
		'3253  -  מפתחים שותפות עם בני משפחה עם מוגבלויות  במודל מיזוג ידע  merging of knowledge model
',
		'3256  -  אלימות נגד נשים במשפחה  Violence Against Women in the Family
',
		'3275  -  הפרעות התנהגותיות של ילדים ובני נוער  Behavioral disorders of children and adolescents
',
		'3278  -  חברה ומגדר: סוגיות סוציולוגיות  Society and Gender: Sociological Issues
',
		'3281  -  אוכלוסיות חסרות בית (Homelessness): תיאוריה, מדיניות ועקרונות עבודה  Populations Experiencing Homelessness: Theory, Policy and Practice
',
		'3283  -  אהבה, חמלה, זעם ותוקפנות: מתיאוריה ליישומים טיפוליים  Love, Compassion, rage & aggression: From theory to practice
',
		'3285  -  פרקטיקה מודעת עוני בעבודה סוציאלית  Poverty aware practice in social work
',
		'3288  -  גישה דינאמית פסיכואנליטית בטיפול ובהתערבות קלינית  Dynamic Psychoanalytic approach in Therapy & Clinical intervention
',
		'3304  -  מתודות בעבודה סוציאלית (מתודות לשנה ב)  SOCIAL WORK METHODS
',
		'3306  -  מבוא לבטחון סוציאלי  INTRODUCTION TO SOCIAL SECURITY
',
		'3317  -  מתודות ודרכי התערבות קהילתית וארגונית  COMMUNITY AND ORG. SOCIAL WORK INTERV.A
',
		'3326  -  נשים בקהילה ושנוי חברתי: פרקטיקה בקורתית  WOMEN IN THE COMMUNITY: S.W. CRITICAL PRACTICE
',
		'3339  -  גישות התערבות בשכול ואבדן  Interventional strategies in bereavement and loss.
',
		'3360  -  תהליכים דינמיים בטיפול קבוצתי  29/5000 Dynamic processes in group therapy
',
		'3365  -  בין טובת הילד לזכותו  BETWEEN CHILDRENS RIGHTS AND THE BEST INTEREST
',
		'3369  -  עבודה קלינית במצבי דחק אקוטים וכרונים: בין פרט למשפחה  Clinical intervention with acute and chronic stress circumstances, at the level of the individual an
',
		'3374  -  טיפול בילדים באמצעות משחק ע"פי הגישה הפסיכודינמית  Play Therapy according to the Psychodynamic approach
',
		'3385  -  הפסיכולוגיה הקהילתית כגישה ופרקטיקה ליצירת שינויים בקהילות  The community psychology as an approach an .practice for creating changes in communities
',
		'3391  -  מושגי יסוד בעבודה סוציאלית  Basic concepts in social work
',
		'3397  -  מתודות בעבודה סוציאלית לתלמידי שנה א ישיבה יונברסיטי בישראל  Methods in Social Work for First Year Students Yeshiva University in Israel
',
		'3399  -  שירותים חברתיים אישיים ומערכות הביטחון הסוציאלי בישראל (ישיבה יוניברסיטי)  Personal Social Services and Social Security Systems in Israel (Yeshiva university)
',
		'3402  -  שיטות מחקר איכותניות למתקדמים  ADVANCED QUALITATIVE RESEARCH METHODS DATA ANAL
',
		'3411  -  העברה והעברה נגדית בעבודה סוציאלית: היבטים קליניים ותיאורטיים  Transference and Counter Transference in Social Work: Theory and Practice
',
		'3416  -  גרנטולוגיה חברתית  SOCIAL GERONTOLOGY
',
		'3438  -  מדיניות כלפי שימוש בסמים: פרספקטיבה היסטורית והשוואתית  DRUG POLICY: HISTORICAL AND COMPARATIVE PERSPECT
',
		'3448  -  השמוש בסמכות ובחוק ככלים טפוליים  AUTHORITY AND LAW AS INTERVENTION METHODS
',
		'3456  -  יסודות החשיבה הקלינית: מסגרת החשיבה הפסיכואנליטית  The Foundations of The Psychoanalytic Thinking
',
		'3458  -  יסודות החשיבה הקלינית: טיפול הומניסטי חוויתי  Foundation of Clinical Practice: HumanisticExperiential Therapy
',
		'3460  -  יסודות החשיבה הקלינית: החשיבה הפסיכודינמית ויישומה בעבודה סוציאלית  Foundation of Clinical Practice: The Psychodynamic approach as applied to Social Work
',
		'3464  -  כתיבה מדעית לצורך פרסום  ACADMIC WRITING FOR PUBLICATION
',
		'3481  -  דילמות ואתגרים בניהול שירותי רווחה ושירותים חברתיים  Challenges and dillemas in social services managment
',
		'3488  -  לימודי מוגבלות: גישות וסוגיות  Disability Studies: Aproaches and Issues
',
		'3516  -  מתבגרים: אתגרים במעבר מילדות לבגרות  Adolescence: challenges in the transition from childhood to adulthood.
',
		'3560  -  שיטות מחקר כמותיות למתקדמים  ADVANCED QUANTITATIVE RESEARCH METHODS
',
		'3630  -  דרכי התערבות בקבוצה  SOCIAL WORK INTERVENTION WITH GROUPS
',
		'3664  -  השנים המאוחרות בחיים: הבטים תאורטיים ומעשיים  THE LATE YEARS IN LIFE: THEORIES AND PRACT. ISSU
',
		'3687  -  הגישה הדיאלוגיתיהודית בטפול בעבודה סוציאלית  THE DIALOGICJEWISH APPROACH TO SW INTERVENTION
',
		'3802  -  חשיבה מדעית ובנית מחקר  SCIENTIFIC THOUGHT AND RESEARCH DESIGN
',
		'3818  -  מדיניות רווחה בפרספקטיבה השוואתית  SOCIAL POLICY IN A COMPARATIVE PERSPECTIVE
',
		'3845  -  שימוש בחומרים פסיכואקטיביים מניעה וטיפול  The use of psychoactive substances  Prevention and Treatment
',
		'3923  -  אלימות גברים נגד נשים במשפחה  VIOLENT MEN AGAINST WOMEN IN THE FAMILY
',
		'3018  -  טיפול בקבלה (ACCEPTANCE) ומחוייבות (COMMITMENT)  Treatment in acceptance and commitment
',
		'3103  -  מבוא לעבודה סוציאלית  ב  INTRODUCTION TO SOCIAL WORKII
',
		'3340  -  שרותי רווחה אישיים  PERSONAL SOCIAL SERVICES
',
		'3804  -  עיבוד נתונים וניתוחם  DATA PROCESSING AND DATA ANALYSIS
',
		'3038  -  התערבות מבוססת ראיות בעבודה סוציאלית  Evidencebased intervention in social work
',
		'3078  -  טיפול קוגניטיביהתנהגותי בטראומה  Cognitive behavioral therapy for trauma
',
		'3099  -  סמינר דוקטורנטים  ב  RESEARCH STUDENTS SEMINAR  II
',
		'3172  -  טיפול חוויתי ממוקד רגשות  Experiential emotionfocused psychotherapy
',
		'3182  -  טיפול קצר מועד לפי גישות פסיכודינמיות  Short term psychodynamic therapies
',
		'3185  -  מיומנויות טיפול בהורים: גישה מודעת מגדר ותרבות  therapy intervention skills with parents and couples
',
		'3222  -  חקר אלימות במשפחה  Family Violence Research
',
		'3249  -  בין העולם וביני פרקטיקה טיפולית ביקורתית בעבודה סוציאלית, בין האישי והחברתי  Between the world and me Critical therapy practice in social work, between personal (individual)
',
		'3358  -  טיפול זוגי ומשפחתי בגישה מערכתית רבדורית  transgenerational
',
		'3395  -  מחקר איכותני אודות פגיעות מיניות בילדים ובבני נוער  Qualitative research on sexual abuse in children and youth
',
		'3441  -  מי אני? זהות וערכים בגיל ההתבגרות  Who am I? Identity and values in adolescence
',
		'3474  -  סוגיות מחקריות בתחום המוגבלויות  Research issues in the disabilities field
',
		'3478  -  טיפול בטראומה  Trauma Treatment
',
		'3561  -  הטיפול בפרט ובמשפחה בגישת פסיכולוגיית העצמי  SELF PSYCHOLOGY THERAPY WITH INDIVIDUALS AND FAM
',
		'3641  -  אוכלוסיות מעורבות בהתנהגויות סיכון  CLIENTS INVOLVED IN RISKBEHAVIOUR
',
		'3892  -  עבודה קלינית באורינטציה פיסכואנליטית  Psychoanalytically oriented clinical work
',
		'3940  -  סמינר תזה  SEMINAR FOR STUDENTS WRITING M.A. THESES
',
		'3001  -  קורס מדריכים מתחילים  INSTRUCTORS COURSE BEGINNERS
',
		'3126  -  הדרכה בשימוש בספרייה ביה"ס לעבודה סוציאלית  קורס מתוקשב  INFORMATION RESOURCES IN THE LIBRARY  online course
',
		'3565  -  לימוד עצמאי מונחה  INDEPENDENT STUDIES
',
		'3953  -  קורס קריאה אישי  READING COURSE
',
		'3085  -  פרוייקט בהכשרה מקצועית  שנה ג  Project in Feildwork Training  Third Year
',
		'3651  -  הכשרה מקצועית (שנה ג)  FIELD WORK THIRD YEAR
',
		'3052  -  שירותי רווחה אישיים ( לתוכנית ההשלמות לבעלי תארים אחרים)  PERSONAL SOCIAL SERVICES ( For the MSw program for students with B.a)
',
		'3201  -  מבוא לעבודה סוציאלית  INTRODUCTION TO SOCIAL WORK
',
		'3279  -  יסודות בהנחיית קבוצות  Foundation in Group Interventions
',
		'3029  -  סדנה בהכשרה מקצועית לתלמידי תוכנית ההשלמות  שנה ב  WORKSHOP IN FIELDWORK TRAINING (SWM for studnts with BA)  SECOND YEAR
',
		'3207  -  הכשרה מקצועית  16 שעות בשבוע (שנה שניה)  FIELDWORK TRAINING  16 HOURS PER WEEK SECOND YE
',
		'3048  -  מיזמים עסקיים חברתיים  כיוון חדש לעשיה חברתית  social enterprises  new options for social change
',
		'3068  -  ניהול חברתי  social management
',
		'3144  -  ניהול פיננסי של מלכ"רים  FINANCIAL MANAGEMENT OF NONPROFIT ORGANIZATIONS
',
		'3200  -  שיקולים כלכליים בפעולת ארגוני המגזר השלישי  Economic Aspects Regarding Activities of ThirdSector Organizations
',
		'3237  -  ניהול התנדבות והשתתפות אזרחית  Management of volunteerism and civic participation
',
		'3240  -  יזמות חברתית: הלכה למעשה  Social Entrepreneurship: Practice
',
		'3258  -  ארגוני רווחה והחברה החרדית  Welfare organizations and Haredi society
',
		'3492  -  תכנון אסטרטגי  STRATEGIC PLANNING
',
		'3568  -  חשיבה ולמידה מערכתית בפיתוח ובניהול מלכ"רים  SYSTEMS THINKING AND EXPERIMENTAL LEARNING IN OR
',
		'3660  -  יזמות חברתית  SOCIAL ENTREPRENEURSHIP
',
		'3763  -  החברה האזרחית ויזמות חברתית במשבר הקורונה  ממשבר לצמיחה  Civil Society and Social Entrepreneurship in the Corona Crisis  From Crisis to Growth
',
		'3884  -  החברה האזרחית והמגזר השלישי: מבוא  CIVIL SOCIETY AND THE THIRD SECTOR: INTRODUCTION
',
		'3979  -  היבטים רגולטורים, משפטיים ומיסויים בעמותות ובארגוני החברה האזרחית  Regulatory, legal and tax aspects of NGOs and civil society organizations
',
		'3259  -  מיעוטים, הדרה חברתית וזהות  Minorities, social exclusion and identity
',
		'3494  -  סוגיות מגדריות בחברה האזרחית ובשירותים חברתיים  Gender issues in civil society
',
		'3924  -  יזום, תכנון והפעלה של פרוייקטים  PLANNING & PROJECT MANAGEMENT
',
		'3010  -  מנוירון למוח = נוירולוגיה התפתחותית במארג הסביבתי  From neuron to brain  developmental neurology in the social network
',
		'3244  -  עקרונות התערבות במסגרות טיפול בגיל הרך  principles of intervention in early childhood frameworks
',
		'3387  -  מבוא למחקר איכותני לתלמידי מוסמך בגיל הרך  introduction to qualitative research ( Early childhood studies)
',
		'3422  -  הפרעת קשב, אופנה או מגיפה? מהבסיס הנוירוביולוגי להשפעה החברתית, מודל לעבודת צוות רב מקצועי  ADHD  popular trend or an epidemic? from neurobiology to social effects, a model for multidisciplin
',
		'3426  -  מודלים להתערבות בבריאות הנפש בגיל הרך  MODELS OF INTERVANTION IN INFANT MENTAL HEALTH
',
		'3528  -  יסודות מתקדמים בבריאות הנפש  MENTAL HEALTH IN EARLY CHILDHOOD  B
',
		'3574  -  התערבות במצבי דחק וטראומה אצל ילדים  COUNSELING AND INTERVENTION IN STRESS AND TRAUMA
',
		'3684  -  הפרעה בספקטרום האוטיזם: עקרונות התערבות  Autism Spectrum Disorder: Principles of Intervention
',
		'3734  -  קוריקולום לגיל הרך: גישות תאורטיות ויישומן  Early Childhood Curriculum  Theoretical approaches and their application
',
		'3754  -  התפתחות בגיל הרך: תהליכים רגשיים וחברתיים  EMOTIONAL AND SOCIAL DEVELOPMENT IN E. C.
',
		'3773  -  תהליכים קבוצתיים ותקשורת בקבוצת הדרכה  Group processes and communication in group training
',
		'3933  -  עבודת סכום הפרקטיקום  PRACTICUM: FINAL SUMMARY REPORT
',
		'3271  -  בחינת הבדלים קוגניטיביים, התנהגותיים וחברתיים בין בנים ובנות בגיל הרך  Examination of cognitive, behavioral and social differences between boys and girls in early childhoo
',
		'3495  -  פיתוח וניהול תוכניות בגיל הרך  Development and management of early childhood programs
',
		'3652  -  מודל הדרכה באמצעות וידיאו  CONSULTATION FOR EARLY CHILDHOOD SETTINGS: VIDEO
',
		'3751  -  פרקטיקום ב  PRACTICUM  II
'
];
HUJI_courses_lists['מרכז אדמונד ולילי ספרא למדעי המוח'] = 
[
		'76900  -  פיסיולוגיה של מערכת העצבים א  PHYSIOLOGY OF THE NERVOUS SYSTEM A
',
		'76913  -  תהליכים קוגנטיביים מתקדמים  ADVANCED COGNITIVE PROCESSES
',
		'76931  -  מערכות דינאמיות ותא העצב  DYNAMICAL SYSTEMS AND THE NEURON
',
		'76943  -  קורס טיוטוריאלי: נושאים נבחרים בחישוביות עצבית  TUTORIAL COURSE: SELECTIVE TOPICS IN NEURAL COMPUTATION
',
		'76949  -  המוח המתנוון : ממחקר לתקווה  THE DEGENERATING BRAIN: FROM RESEARCH TO HOPE
',
		'76994  -  קורס מתקדם ב Matlab  ADVANCED MATLAB COURSE
',
		'76909  -  תאוריה של חישוב עצבי ב  THEORETICAL AND COMPUTATIONAL NEUROSCIENCE B
',
		'76915  -  עיבוד מידע ולמידה  INTRODUCTION TO INFORMATION AND LEARNING PROCESS
',
		'76989  -  מבוא לקוגניציה  INTRODUCTION TO COGNITION
',
		'76992  -  אלגברה לינארית למדעי המוח  LINEAR ALGEBRA FOR NEUROSCIENCE
',
		'76920  -  קולוקוויום במדעי המוח  COLLOQUIUM IN BRAIN SCIENCES
',
		'76956  -  מודלים של תאי עצב ורשתות נוירונים  MODELING NEURONS AND NEURONAL NETWORKS
',
		'76990  -  בחינה מסכמת בלימודי מוסמך  FINAL MSC EXAMINATION
',
		'76922  -  סבב מעבדות  LAB ROTATION
',
		'76993  -  שיטות בחקר המוח בבני אדם  HUMAN NEUROSCIENCE METHODS
',
		'76997  -  מבוא למדעי המוח  INTRODUCTION TO BRAIN SCIENCES
'
];
HUJI_courses_lists['ביה"ס להנדסה ולמדעי המחשב'] = 
[
		'67103  -  רשתות נוירונים לתמונות  NEURAL NETWORKS FOR IMAGES
',
		'67111  -  תוכנה בגדול  LARGE SOFTWARE PROJECTS
',
		'67128  -  תורת המשחקים לתלמידי תיכון מצטיינים  GAME THEORY FOR HIGH SCHOOL
',
		'67296  -  דחיסת תמונה ווידאו  Image and Video Compression
',
		'67398  -  דיני סייבר  CYBER LAW
',
		'67510  -  פילוסופיה והסטוריה, אינטיליגנציה ומחשבים  PHILOSOPHY AND HISTORY, INTELLIGENCE AND COMPUTERS
',
		'67532  -  ניתוח אוטומטי של תוכנה  AUTOMATED REASONING ABOUT SOFTWARE
',
		'67573  -  פתרון בעיות באלגוריתמים  ALGORITHMIC PROBLEM SOLVING
',
		'67624  -  נושאים מתקדמים בתיאוריה של למידה  ADVANCED TOPICS IN LEARNING THEORY
',
		'67656  -  עיבוד אותות מתקדם  ADVANCED SIGNAL PROCESSING
',
		'67663  -  אוטומטים מעל עצמים אינסופיים  AUTOMATA INFINITE OBJECTS
',
		'67688  -  מדריך למהפכני מידע  A GUIDE FOR DATA REVOLUTIONISTS
',
		'67778  -  בדיקת תוכנה  SOFTWARE TESTING
',
		'67822  -  מבוא ללמידה עמוקה  INTRODUCTION TO DEEP LEARNING
',
		'67868  -  גיאומטריה של גרפים  GEOMETRY OF GRAPHS
',
		'67892  -  נושאים בחישוב בטוח  Topics in Secure Computation
',
		'67126  -  מבוא לתכנות מונחה עצמים  קורס קיץ  INTRODUCTION TO OBJECT ORIENTED  SUMMER COURSE
',
		'67298  -  מבוא לממשק אדם מחשב  INTRODUCTION TO HUMAN COMPUTER INTERACTION
',
		'67315  -  סדנת תכנות בשפות C ו ++C  PROGRAMMING WORKSHOP IN C & C++
',
		'67320  -  סדנת תכנות ב C ו C++ קיץ  PROGRAMMING WORKSHOP IN C & C++ SUMMER COURSE
',
		'67420  -  סדנה לשפות תכנות  PROGRAMMING LANGUAGES WORKSHOP
',
		'67504  -  אלגוריתמים  ALGORITHMS
',
		'67521  -  מודלים חישוביים, חישוביות וסיבוכיות  COMPUTATIONAL MODELS, COMPUTABILITY AND COMPLEXITY
',
		'67542  -  ראייה ממוחשבת 3D  COMPUTER VISION3D
',
		'67564  -  למידה חישובית בייזיאנית  BAYESIAN MACHINE LEARNING
',
		'67594  -  מבוא לרשתות תקשורת  INTRODUCTION TO COMMUNICATION NETWORKS
',
		'67625  -  מיחשוב בעידן POST PC מיחשוב נייד ממוקד משתמשים  POST PC COMPUTING: HUMANCENTRIC MOBILE COMPUTI
',
		'67653  -  שיטות סטטיסטיות בהנדסה ומדעי המחשב  STATISTICAL METHODS IN ENGINEERING AND COMPUTER SCIENCE
',
		'67680  -  סדנה בעיבוד שפה טבעית בעברית  WORKSHOP IN HEBREW NATURAL LANGUAGE PROCESSING
',
		'67731  -  אופטימיזציה קמורה ושימושים  CONVEX OPTIMIZATION AND APPLICATIONS
',
		'67737  -  ויזואליזציה וסוניפיקציה  VISUALAIZATION AND SONIFICATION
',
		'67800  -  שיטות הסתברותיות בבינה מלאכותית  PROBABILISTIC METHODS IN ARTIFICAL INTELLIGENCE
',
		'67829  -  עיבוד ספרתי של תמונות  IMAGE PROCESSING
',
		'67865  -  כלים מתמטיים במדעי המחשב  MATHEMATICAL TOOLS IN COMPUTER SCIENCE
',
		'67104  -  נושאים מתקדמים במערכות מרובות רובוטים  Advanced topics in multirobot systems
',
		'67578  -  סמינריון בוגר לתלמידים מצטיינים  SEMAINAR FOR OUTSTANDING UNDERGRADUATE STUDENTS
',
		'67602  -  סמינרים ברפואה חישובית  SEMINARS IN COMPUTATINAL MEDICINE
',
		'67619  -  סמינר מתקדם בלמידה 2  ADVANCED TOPICS IN MACHINE LEARNING 2
',
		'67717  -  סמינר מתקדם בהנדסת תכנה  ADVANCED SEMINAR IN SOFTWARE ENGINEERING
',
		'67839  -  נושאים מתקדמים בראייה ממוחשבת  סמינריון  ADVANCED TOPICS IN COMPUTER VISION
',
		'67861  -  מערכות מבוזרות, רשתות, אבטחת מידע  סמינריון  DISTRIBUTED ALGORITHMS, NETWORKING AND SECURE SYSTEMS SEMINAR
',
		'67877  -  מסדי נתונים והאינטרנט  סמינריון  SEMINAR ON DATABASE & THE INTERNET
',
		'67894  -  קולוקוויום מחלקתי  DEPARTMENTAL COLLOQUIUM  COMPUTER SCIENCE
',
		'67916  -  שיטות אינפורמציוניות בסטטיסטיקה  INFORMATION THEORETIC METHODS IN STATISTICS
',
		'67832  -  מערכות הפעלה מבוזרות  DISTRIBUTED OPERATING SYSTEMS
',
		'67313  -  מעבדה בתורת משחקים אלגוריתמית  LAB IN ALGORITHMIC GAME THEORY
',
		'67547  -  סדנה לתלמידי הנדסה (2)  ENGINEERING PROJECT AND WORKSHOPS  II
',
		'67646  -  מעבדה בראיה ממוחשבת  COMPUTER VISION LAB
',
		'67689  -  מעבדה בזיהוי אובייקטים בתמונות  VISUAL OBJECT RECOGNITION  LAB
',
		'67734  -  מעבדה במסדי נתונים מודרניים  LAB. IN MODERN DATABASES
',
		'67818  -  מעבדה יישומית תחרותית במדע הנתונים  Applied Competitive Lab in Data Science
',
		'67836  -  מעבדה בבלשנות חישובית  COMPUTATIONAL ASPECTS OF APPL. LINGUISTICS LAB
',
		'67843  -  ראייה ממוחשבת  מעבדה  COMPUTER VISION  LAB
',
		'67845  -  מערכות מקביליות ומבוזרות  מעבדה  PARALLEL AND DISTRIBUTED SYSTEMS  LAB
',
		'67848  -  מעבדה במערכות בטוחות ואבטחת מידע  CYBERSECURE SYSTEMS LAB.
',
		'67874  -  בינה מלאכותית  מעבדה  LABORATORY IN ARTIFICAL INTELLIGENCE
',
		'67888  -  מעבדה בעיבוד אותות ואופטימיזציה  SIGNAL PROCESSING AND OPTIMIZATION  LAB
',
		'67897  -  מעבדה בגרפיקה וצילום חישובי  COMPUTER GRAPHICS AND COMPUTATIONAL PHOTOGRAPHY LAB.
',
		'67979  -  שימושים של למידה חישובית  מעבדה  LAB MACHINE LEARNING APPLICATIONS
',
		'67987  -  מעבדה בשיטות ספקטרליות לעיבוד מידע במימד גבוה  SPECTRAL METHODS FOR HIGH DIMENSIONAL DATA ANALYSIS (LAB)
',
		'67501  -  מבוא ללוגיקה מתמטית לבעלי אוריינטציה תכנותית  INTRODUCTION TO MATHEMATICAL LOGIC FOR PROGRAMMINGORIENTED STUDENTS
',
		'67886  -  ארכיטקטורות נתבים ומתגים  SWITCH AND ROUTER ARCHITECTURES
',
		'67001  -  קורס ממוחשב בבטיחות שנה א  COMPUTER BASED SAFETY TRAINING 1
',
		'67003  -  קורס ממוחשב בבטיחות שנה ג  COMPUTER BASED SAFETY TRAINING 3
',
		'67524  -  עבודה מודרכת  TUTORIAL WORK
',
		'67538  -  עבודה מודרכת  TUTORIAL WORK
',
		'67669  -  קורס קריאה מתקדם  ADVANCED READING COURSE
',
		'67926  -  סדנה במערכות חישוב מNAND לTETRIS קורס קיץ  COMPUTER CONS. WORKSHOP: FROM NAND TO TETRIS  SUMMER COURSE
',
		'67118  -  סדנא בקוד פתוח  OPENSOURCE WORKSHOP
',
		'67813  -  סדנת הכנה לפרוייקט מסכם למדע הנתונים  PARALLEL PROGRAMMING OF GENERAL PURPOSE GRAPHIC PROCESSORS
',
		'67896  -  אלגוריתמים למחשבי על  סדנה  ALGORITHMS FOR SUPERCOMPUTERS WORKSHOP
',
		'67102  -  מבוא למדעי המחשב  קורס קיץ  INTRODUCTION TO COMPUTER SCIENCE  SUMMER COURSE
',
		'67506  -  מסדי נתונים  DATABASES
',
		'67842  -  מבוא לבינה מלאכותית  INTRODUCTION TO ARTIFICIAL INTELLIGENCE
',
		'67553  -  עבודה סמינריונית  SEMINAR PAPER
',
		'74451  -  עבודת גמר בלימודי מוסמך  M.SC THESIS
',
		'68100  -  סדנה לתלמידי אמירים  WORKSHOP FOR AMIRIM STUDENTS
',
		'47711  -  רשתות, המונים ושווקים  NETWORKS,CROWDS AND MARKETS
',
		'47715  -  עיצוב ממשק משתמש  INTRODUCTION TO HUMAN COMPUTER INTERACTION DESIGN
',
		'47718  -  בניית קהילות באינטרנט  SEMINAR BUILDIN COMMUNITIES ON THE INTERNET
',
		'47717  -  ניתוח מאגרי מידע  DATA MINING
',
		'76552  -  סדנא במיומנויות חישוביות בביולוגיה  WORKSHOP IN COMPUTATIONAL BIOSKILLS
',
		'76563  -  ביולוגיה במאה ה21 נושאים נבחרים ב  21st CENTURY BIOLOGY  SELECTED TOPICS B
',
		'76558  -  אלגוריתמים בביולוגיה חישובית  ALGORITHMS IN COMPUTATIONAL BIOLOGY
',
		'76550  -  סמינריון מוסמך בביולוגיה חישובית  ADVANCED SEMINAR IN COMPUTATIONAL BIOLOGY
',
		'76560  -  סמינר ביו קלאב  Bioclub Seminar
',
		'76554  -  מחקר מודרך בביולוגיה מולקולרית חישובית  COMPUTATIONAL METHODS IN MOLECULAR BIOLOGY LAB
',
		'76131  -  פרוייקט בביוהנדסה  PROJECT IN BIOENGINEERING
',
		'76105  -  יזמות בהנדסה ביורפואית  BIODESIGN
'
];
HUJI_courses_lists['מכינה'] = 
[
		'1260  -  אנגלית מכינה  ENGLISH STUDIES
',
		'1100  -  מדעי המחשב  COMPUTER SCIENCE
',
		'1165  -  כימיה  רמה א  CHEMISTRY
',
		'1270  -  מתמטיקה טבע רמה ג  MATHEMATICS
',
		'1336  -  אנגלית רמת פטור ט+ח סמ א  ENGLISH
',
		'1345  -  אנגלית רמה ג  ENGLISH
',
		'1420  -  מיומ הכת האקדמית ט רמה ב  ACADEMIC WRITING
',
		'1440  -  מיומ הכת האקדמית ט רמה ד  ACADEMIC WRITING
',
		'1470  -  מתמטיקה טבע רמה ב  MATHEMATICS
',
		'1490  -  ביולוגיה  רמה ב  BIOLOGY
',
		'1161  -  פיזיקהמסלול חרדים 
',
		'1106  -  מבוא לפסיכולוגיה  Introduction to Psychology
',
		'1115  -  מיומ הכת האקדמית ח מוגבר  ACADEMIC WRITING
',
		'1251  -  אנגלית  קדם מכינה  ENGLISH 
',
		'1253  -  מיומנויות כתיבה אקדמית  קדם מכינה  ACADEMIC WRITING
',
		'1255  -  מסע לארץ הקודש: סיפור של נוף וסביבה  Excursion to The Holy Land: A Tale of Landscape and Surroundings
',
		'1151  -  פרקים בפיסיקה  Chapters in PHYSICS
',
		'1108  -  עבודה עצמית בגאוגרפיה  Selfstudy Geography
',
		'1043  -  עיונים בתרבות המערב כבסיס לחשיבה ומחקר היסטוריים  studies in Western culture as a basis for historical thinking and research
',
		'1071  -  שיטות מחקר  research methods
',
		'1110  -  מיומ הכת האקדמית רו"חרמה א  ב  ACADEMIC WRITING
',
		'1310  -  מתמטיקה רו"ח רמה א  MATHEMATICS
',
		'1044  -  עבודה עצמית עיונית בתרבות המערב כבסיס לחשיבה ולמחקר היסטוריים  Selfstudy in the study of Western culture as a basis for historical thinking and research
',
		'1067  -  ממשל ופוליטיקה מכינת חרדים  POLITICS AND GOVERNMENT
',
		'1225  -  אנגליתמסלול חרדים 
'
];
HUJI_courses_lists['תכניות מיוחדות'] = 
[
		'49661  -  הומור ברשתות חברתיות לתלמידי תיכון  Humor on social networks for High School students
',
		'49663  -  תרבות וחברה ביפן המודרנית  Culture and Society in modern Japan
',
		'49601  -  דיני סביבה  ENVIRONMENTAL LAW
',
		'49603  -  סדנה בין מקצועית לבעיות הסביבה תשפא  Interdisciplinary Workshop on Environmental Issues
'
];

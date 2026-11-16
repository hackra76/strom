import type { Language } from './strings.js';

const EXACT_EN: Record<string, string> = {
    '1. manželka Jána Holevu (* 1871)': '1st wife of Ján Holeva (* 1871)',
    '2. manželka Jána Holevu (* 1871)': '2nd wife of Ján Holeva (* 1871)',
    '1. syn Tarasa Troyana a Alžbety Holevovej, U.S. Navy WWII': '1st son of Taras Troyan and Alžbeta Holevová, U.S. Navy WWII',
    '2. syn Tarasa Troyana a Alžbety Holevovej, U.S. Navy WWII': '2nd son of Taras Troyan and Alžbeta Holevová, U.S. Navy WWII',
    'Architekt a bývalý poslanec NR SR, syn Jozefa Holevu a Heleny Kočíkovej': 'Architect and former Member of the Slovak Parliament (NR SR), son of Jozef Holeva and Helena Kočíková',
    'Architekt, syn Ing. arch. Viliama Holevu st. a Márie Holevovej': 'Architect, son of Ing. arch. Viliam Holeva Sr. and Mária Holevová',
    'Dcera Adama Holevu (#28) a Anny Zoscakovej (#29), narodena 12. 3. 1887 v Bardejove c. 446 (pokrstená 20. 3. 1887), zomrela 20. 1. 1888.': 'Daughter of Adam Holeva (#28) and Anna Zoscaková (#29), born 12 Mar 1887 in Bardejov No. 446 (baptised 20 Mar 1887), died 20 Jan 1888.',
    'Dcéra Andreja Holevu (#14)': 'Daughter of Andrej Holeva (#14)',
    'Dcéra Antona Šustra a Alžběty Rampertovej z Rybář č. 11 pri Mělníku': 'Daughter of Anton Šustr and Alžběta Rampertová from Rybáře No. 11 near Mělník',
    'Dcéra Arthura Troyana a Marcie': 'Daughter of Arthur Troyan and Marcia',
    'Dcéra Arthura Troyana a Marcie, vyd. Maye': 'Daughter of Arthur Troyan and Marcia, married name Maye',
    'Dcéra Becky Van Vleet': 'Daughter of Becky Van Vleet',
    'Dcéra Becky Van Vleet, vyd. Burgess': 'Daughter of Becky Van Vleet, married name Burgess',
    'Dcéra Becky Van Vleet, vyd. Turner': 'Daughter of Becky Van Vleet, married name Turner',
    'Dcéra Becky Van Vleet, vyd. Vrolijk': 'Daughter of Becky Van Vleet, married name Vrolijk',
    'Dcéra Filipa / Konráda Kolaříka z Ostrožskej Lhoty': 'Daughter of Filip / Konrád Kolařík from Ostrožská Lhota',
    'Dcéra Františka Holevu (* 1921)': 'Daughter of František Holeva (* 1921)',
    'Dcéra Františka Holevu (* 1921), manželka Ing. arch. Viliama Holevu st. (* 1950)': 'Daughter of František Holeva (* 1921), wife of Ing. arch. Viliam Holeva Sr. (* 1950)',
    'Dcéra Jozefa Bučinu a Kataríny Magyarovej': 'Daughter of Jozef Bučina and Katarína Magyarová',
    'Dcéra Jána Magyara a Anny Kočišovej': 'Daughter of Ján Magyar and Anna Kočišová',
    'Dcéra Václava Maňáska z Boršíc': 'Daughter of Václav Maňásek from Boršice',
    'Dcéra štvrťníka Juraja Zjedníka z Moravského Písku': 'Daughter of quarter-holder Juraj Zjedník from Moravský Písek',
    'Dom č. 140, syn Pavla Dvorského st. a Anny Kolaříkovej': 'House No. 140, son of Pavel Dvorský Sr. and Anna Kolaříková',
    'Domkár a rybár v Rybářoch č. 11 pod mělnickým zámkom': 'Cottager and fisherman in Rybáře No. 11 below Mělník Castle',
    'Domkár v Moravskom Písku č. 24, syn Žigmunda Dvorského z Boršíc č. 71': 'Cottager in Moravský Písek No. 24, son of Žigmund Dvorský from Boršice No. 71',
    'Domkár v Rousoviciach č. 33 pri Mělníku': 'Cottager in Rousovice No. 33 near Mělník',
    'Dvojička s Annou': 'Twin of Anna',
    'Dvojička s Júliou': 'Twin of Júlia',
    'FamilySearch ID L65V-D7R, dcéra Adolfa Martinyiho a Eszter Dósovej': 'FamilySearch ID L65V-D7R, daughter of Adolf Martinyi and Eszter Dósa',
    'Holič v Bardejove': 'Barber in Bardejov',
    'Holičský majster v Bardejove, brat Andreja Holevu': 'Master barber in Bardejov, brother of Andrej Holeva',
    'Holičský pomocník, syn Andreja Holevu (#14)': 'Barber apprentice, son of Andrej Holeva (#14)',
    'I. manželka Františka Vatehu, r. Kučminová': '1st wife of František Vateha, née Kučminová',
    'I. manželka, r. Čeremetová': '1st wife, née Čeremetová',
    'II. manželka Františka Vatehu, r. Revayová': '2nd wife of František Vateha, née Revayová',
    'II. manželka, r. Jašeková': '2nd wife, née Jašeková',
    'Index narodených: Jan Pšenička v Mlaziciach (1824, Tom. IX, fol. 29)': 'Birth index: Jan Pšenička in Mlazice (1824, Vol. IX, fol. 29)',
    'Krst Andrása Alajosa Dobosa 1895, Bolyok (farnosť Sajóvárkony)': 'Baptism of András Alajos Dobos 1895, Bolyok (Sajóvárkony parish)',
    'Krst Anny Holevovej (Holyévovej) 1887, Bardejov': 'Baptism of Anna Holevová (Holyéva) 1887, Bardejov',
    'Krst Anny Holevovej (Holyévovej) 1895, Bardejov': 'Baptism of Anna Holevová (Holyéva) 1895, Bardejov',
    'Krst Anny Maňáskovej v Boršiciach (1718)': 'Baptism of Anna Maňásková in Boršice (1718)',
    'Krst Anny Zámborszkej 1888, Bardejov': 'Baptism of Anna Zámborszká 1888, Bardejov',
    'Krst Anny Špačkovej v Rousovických viniciach č. 20 (1775)': 'Baptism of Anna Špačková in Rousovice Vineyards No. 20 (1775)',
    'Krst Dezidera Vácziho 1908, Hnilec': 'Baptism of Dezider Váczi 1908, Hnilec',
    'Krst Matěja Špačka v Rousovických viniciach č. 20 (1773)': 'Baptism of Matěj Špaček in Rousovice Vineyards No. 20 (1773)',
    'Krst Márie Dobosovej 1879, Chrámec (farnosť Dubovec)': 'Baptism of Mária Dobosová 1879, Chrámec (Dubovec parish)',
    'Krst Tomáša Václavíka (Váczyho) 1866, Detvianska Huta (Ľuľovka)': 'Baptism of Tomáš Václavík (Váczy) 1866, Detvianska Huta (Ľuľovka)',
    'Krst Tomáša Václavíka (starší brat) 1864, Detvianska Huta (Ľuľovka)': 'Baptism of Tomáš Václavík (elder brother) 1864, Detvianska Huta (Ľuľovka)',
    'Manzelka Jozefa Holevu (Josephus et Maria Choleva) v Gaboltove; matka Juraja (* 4. 4. 1802) a Alzbety (* 2. 10. 1811).': 'Wife of Jozef Holeva (Josephus et Maria Choleva) in Gaboltov; mother of Juraj (* 4 Apr 1802) and Alžbeta (* 2 Oct 1811).',
    'Manžel Alžbety Anny Holevovej (* 1902)': 'Husband of Alžbeta Anna Holevová (* 1902)',
    'Manžel Becky Marie Troyan': 'Husband of Becky Marie Troyan',
    'Manželka Adama Kazsika, matka Anny Kazsikovej (* 9. 6. 1811 Gaboltov)': 'Wife of Adam Kazsik, mother of Anna Kazsiková (* 9 Jun 1811 Gaboltov)',
    'Manželka Antona Šustra v Rybářoch č. 11': 'Wife of Anton Šustr in Rybáře No. 11',
    'Manželka Arthura Troyana': 'Wife of Arthur Troyan',
    'Manželka Chestera Troyana': 'Wife of Chester Troyan',
    'Manželka Jozefa Holevu (BAPOS 03/02/14/6)': 'Wife of Jozef Holeva (BAPOS 03/02/14/6)',
    'Manželka Jána Bučinu vo Veľkej Ide': 'Wife of Ján Bučina in Veľká Ida',
    'Manželka Jána Magyara vo Veľkej Ide': 'Wife of Ján Magyar in Veľká Ida',
    'Manželka Vincenta Holevu (sčítanie 1930 Mlynská 5/765, BAPOS 02/02/2/6)': 'Wife of Vincent Holeva (1930 census Mlynská 5/765, BAPOS 02/02/2/6)',
    'Manželka Václava Špačka (#168) v Rousovických viniciach čp. 20. Pri štyroch krstoch detí (1766, 1769, 1771, 1775) zapísaná ako Anna, pri krste syna Matěja (8. 3. 1773) ako Elisabetha.': 'Wife of Václav Špaček (#168) in Rousovice Vineyards No. 20. Recorded as Anna at four children\'s baptisms (1766, 1769, 1771, 1775), and as Elisabetha at son Matěj\'s baptism (8 Mar 1773).',
    'Manželka Waltera Troyana, mama Becky Van Vleet': 'Wife of Walter Troyan, mother of Becky Van Vleet',
    'Matka Andreja Holevu': 'Mother of Andrej Holeva',
    'Matka Anny Gentilini': 'Mother of Anna Gentilini',
    'Matka Anny Maňáskovej (#129), manželka Václava Maňáska (#258) v Boršiciach.': 'Mother of Anna Maňásková (#129), wife of Václav Maňásek (#258) in Boršice.',
    'Matka Bartoliho Gentiliniho': 'Mother of Bartoli Gentilini',
    'Matka Bc. Jozefa Jurčáka, stará mama Zuzany Jurčákovej': 'Mother of Bc. Jozef Jurčák, grandmother of Zuzana Jurčáková',
    'Matka Tarasa Williama Troyana': 'Mother of Taras William Troyan',
    'Mladšia sestra Matěja Špačka (#84), pokrstená 29. 1. 1775 v Rousovických viniciach čp. 20.': 'Younger sister of Matěj Špaček (#84), baptised 29 Jan 1775 in Rousovice Vineyards No. 20.',
    'Najmladšia sestra pradeda Andreja Holevu, Bardejov č. 115': 'Youngest sister of great-grandfather Andrej Holeva, Bardejov No. 115',
    'Narodenie Alžbety Šustrovej v Rybářoch č. 11 (1803, 8. generácia: #174 Matěj Ramert)': 'Birth of Alžbeta Šustrová in Rybáře No. 11 (1803, 8th gen: #174 Matěj Ramert)',
    'Narodenie Anny Špačkovej v Rousoviciach č. 53 (1835, dôkaz rodičov #84 a #85 pre #42)': 'Birth of Anna Špačková in Rousovice No. 53 (1835, proof of parents #84 and #85 for #42)',
    'Narodenie Antona Šustra ml. v Rybářoch č. 11 (1801)': 'Birth of Anton Šustr Jr. in Rybáře No. 11 (1801)',
    'Narodenie Apolónie Poláchovej (1805)': 'Birth of Apolónia Poláchová (1805)',
    'Narodenie Františka Dvorského (1826, brat Pavla Dvorského ml.)': 'Birth of František Dvorský (1826, brother of Pavel Dvorský Jr.)',
    'Narodenie Františka Dvorského ml. (1907)': 'Birth of František Dvorský Jr. (1907)',
    'Narodenie Františka Dvorského st. (1882)': 'Birth of František Dvorský Sr. (1882)',
    'Narodenie Márie (Mariany) Čechovej (1877)': 'Birth of Mária (Mariana) Čechová (1877)',
    'Narodenie Pavla Dvorského (1825)': 'Birth of Pavel Dvorský (1825)',
    'Narodenie Veroniky Dvorskej v Moravskom Písku č. 24 (1792, krstní rodičia z Boršíc)': 'Birth of Veronika Dvorská in Moravský Písek No. 24 (1792, godparents from Boršice)',
    'Narodenie a krst Alžbety Kataríny Andrássyovej vo Veľkej Ide (1880)': 'Birth and baptism of Alžbeta Katarína Andrássyová in Veľká Ida (1880)',
    'Narodenie a krst Andreja Holevu v Bardejove č. 340 (1873)': 'Birth and baptism of Andrej Holeva in Bardejov No. 340 (1873)',
    'Narodenie a krst Josefa Dvorského v Moravskom Písku č. 140 (1850)': 'Birth and baptism of Josef Dvorský in Moravský Písek No. 140 (1850)',
    'Narodenie a krst Jozefa Bučinu vo Veľkej Ide (1820)': 'Birth and baptism of Jozef Bučina in Veľká Ida (1820)',
    'Narodenie a krst Jána Pšeničku v Mlaziciach č. 88 (1824)': 'Birth and baptism of Ján Pšenička in Mlazice No. 88 (1824)',
    'Narodenie a krst Karola Pšeničku v Mělníku (Záduší č. 7, 1867)': 'Birth and baptism of Karol Pšenička in Mělník (Záduší No. 7, 1867)',
    'Narodenie a krst Kataríny Magyarovej vo Veľkej Ide (1820)': 'Birth and baptism of Katarína Magyarová in Veľká Ida (1820)',
    'Narodenie a krst Kateřiny Blateckej v Moravskom Písku č. 139 (1850)': 'Birth and baptism of Kateřina Blatecká in Moravský Písek No. 139 (1850)',
    'Narodenie a krst Mariny Dvorskej v Boršiciach (1743)': 'Birth and baptism of Marina Dvorská in Boršice (1743)',
    'Narodenie a krst Márie Bučinovej vo Veľkej Ide (1849)': 'Birth and baptism of Mária Bučinová in Veľká Ida (1849)',
    'Narodenie a krst Márie Špačkovej v Rousoviciach č. 33 (1828)': 'Birth and baptism of Mária Špačková in Rousovice No. 33 (1828)',
    'Obecný kováč v Moravskom Písku v dome č. 4': 'Municipal blacksmith in Moravský Písek, house No. 4',
    'Otec Anny Gentilini': 'Father of Anna Gentilini',
    'Otec Bartoliho Gentiliniho': 'Father of Bartoli Gentilini',
    'Otec Bc. Jozefa Jurčáka, starý otec Zuzany Jurčákovej': 'Father of Bc. Jozef Jurčák, grandfather of Zuzana Jurčáková',
    'Otec Becky Van Vleet': 'Father of Becky Van Vleet',
    'Otec Matěja Špačka (#84) a 4 ďalších detí v Rousoviciach a Rousovických viniciach čp. 20 (1766–1775), poddaný k panstvu zámku Mělník (Subditi Dnio arcis Melnicens.).': 'Father of Matěj Špaček (#84) and 4 other children in Rousovice and Rousovice Vineyards No. 20 (1766–1775), subject of the Mělník Castle estate.',
    'Otec Tarasa Williama Troyana': 'Father of Taras William Troyan',
    'Paul Dworsky vyslúžený vojak od dragúnov (30 r.) a Apolonia (17 r.), dcéra po obecnom kováčovi Václavovi Poláchovi (+ Wenzl Polax)': 'Paul Dworsky, retired dragoon soldier (30 yrs) and Apolonia (17 yrs), daughter of late municipal blacksmith Václav Polách (+ Wenzl Polax)',
    'Pochovaný v Bardejove (BAPOS 02/04/3/28) spolu s vnukom Rudolfom': 'Buried in Bardejov (BAPOS 02/04/3/28) together with grandson Rudolf',
    'Podsedník (Inmann) v Ostrožskej Lhote, otec Karolíny Minaříkovej (#67), zomrel pred sobášom dcéry 9. 5. 1803.': 'Cottager/lodger (Inmann) in Ostrožská Lhota, father of Karolína Minaříková (#67), died before daughter\'s marriage on 9 May 1803.',
    'Podsedník / podnájomník (Inmann) v Ostrožskej Lhote, otec Filipa Kolaříka (#66).': 'Cottager/lodger (Inmann) in Ostrožská Lhota, father of Filip Kolařík (#66).',
    'Pokrstený 2. 1. 1825, otec Paul Dworsky domkár, matka Apolonia rod. Wengl': 'Baptised 2 Jan 1825, father Paul Dworsky cottager, mother Apolonia née Wengl',
    'Pololánnik v Boršiciach č. 71, syn Václava Dvorského z Polešovíc': 'Half-holder in Boršice No. 71, son of Václav Dvorský from Polešovice',
    'Pravdepodobný krst Václava Michaela Špačka v Rousoviciach č. 20 (1801)': 'Probable baptism of Václav Michael Špaček in Rousovice No. 20 (1801)',
    'Priamy predok v 9. generácii, otec Anny Maňáskovej': 'Direct ancestor in 9th generation, father of Anna Maňásková',
    'Priamy predok v 9. generácii, otec Žigmunda Dvorského': 'Direct ancestor in 9th generation, father of Žigmund Dvorský',
    'Rodisko Ladislava Vácziho (* 18. 11. 1919): Čoltovo vs. Gočovo (okr. Rožňava)': 'Birthplace of Ladislav Váczi (* 18 Nov 1919): Čoltovo vs. Gočovo (Rožňava district)',
    'Rodičia Bc. Jozefa Jurčáka (*1962)': 'Parents of Bc. Jozef Jurčák (*1962)',
    'Sestra Becky Van Vleet, vyd. Arnold': 'Sister of Becky Van Vleet, married name Arnold',
    'Sestra Becky Van Vleet, vyd. Reichart': 'Sister of Becky Van Vleet, married name Reichart',
    'Sestra Becky Van Vleet, vyd. Scott / Snell': 'Sister of Becky Van Vleet, married name Scott / Snell',
    'Sobáš Adama Holevu a Anny Žoščákovej v Bardejove (1871)': 'Marriage of Adam Holeva and Anna Žoščáková in Bardejov (1871)',
    'Sobáš Antona Šustra a Alžbety Ramertovej v Mlazických viniciach č. 84 (1798)': 'Marriage of Anton Šustr and Alžbeta Ramertová in Mlazice Vineyards No. 84 (1798)',
    'Sobáš Filipa Kolaříka a Karolíny Minaříkovej v Ostrožskej Lhote č. 3 (1803)': 'Marriage of Filip Kolařík and Karolína Minaříková in Ostrožská Lhota No. 3 (1803)',
    'Sobáš Františka Dvorského a Márie Čechovej (1907)': 'Marriage of František Dvorský and Mária Čechová (1907)',
    'Sobáš Františka Pšeničku a Kateřiny Votrubovej v Mlaziciach/Pšovke č. 84 (1812)': 'Marriage of František Pšenička and Kateřina Votrubová in Mlazice/Pšovka No. 84 (1812)',
    'Sobáš Jana Pšeničku a Márie Špačkovej v Rousoviciach (1850)': 'Marriage of Jan Pšenička and Mária Špačková in Rousovice (1850)',
    'Sobáš Josefa Dvorského a Kateřiny Blateckej (1873)': 'Marriage of Josef Dvorský and Kateřina Blatecká (1873)',
    'Sobáš Josefa Dvorského a Kateřiny Blateckej, svedkom bol ženíchov starší nevlastný brat Pavel Dvorský ml.': 'Marriage of Josef Dvorský and Kateřina Blatecká; witness was the groom\'s elder half-brother Pavel Dvorský Jr.',
    'Sobáš Jozefa Bučinu a Kataríny Magyarovej vo Veľkej Ide (1841)': 'Marriage of Jozef Bučina and Katarína Magyarová in Veľká Ida (1841)',
    'Sobáš Jána Andrássyho a Márie Bučinovej vo Veľkej Ide (1866)': 'Marriage of Ján Andrássy and Mária Bučinová in Veľká Ida (1866)',
    'Sobáš Jána Dvorského z Boršíc č. 71 a Mariny Zjedníkovej v Moravskom Písku (1789)': 'Marriage of Ján Dvorský from Boršice No. 71 and Marina Zjedníková in Moravský Písek (1789)',
    'Sobáš Karola Pšeničku a Alžbety Andrássyovej v Lenartove (1896)': 'Marriage of Karol Pšenička and Alžbeta Andrássyová in Lenartov (1896)',
    'Sobáš Kateřiny Poláchovej (sestry Apolónie) a Jozefa Blateckého (1819)': 'Marriage of Kateřina Poláchová (sister of Apolónia) and Jozef Blatecký (1819)',
    'Sobáš Matěja Špačka a Anny Márie Čígovej v Rousoviciach č. 20 (1792)': 'Marriage of Matěj Špaček and Anna Mária Čígová in Rousovice No. 20 (1792)',
    'Sobáš Pavla Dvorského a Anny Kolaříkovej v Moravskom Písku č. 140 (1846)': 'Marriage of Pavel Dvorský and Anna Kolaříková in Moravský Písek No. 140 (1846)',
    'Sobáš Pavla Dvorského a Apolónie Poláchovej (1822)': 'Marriage of Pavel Dvorský and Apolónia Poláchová (1822)',
    'Sobáš Václava Špačka a Alžbety Šustrovej v Rybářoch č. 11 (1825)': 'Marriage of Václav Špaček and Alžbeta Šustrová in Rybáře No. 11 (1825)',
    'Sobáš holičského majstra Eduarda (Edeho) Holevu z Bardejova (Hlavné nám. č. 38) v Miškolci (1908)': 'Marriage of master barber Eduard (Ede) Holeva from Bardejov (Hlavné nám. No. 38) in Miskolc (1908)',
    'Sobáš Žigmunda Dvorského z Polešovíc a Anny Maňáskovej v Boršiciach (1742)': 'Marriage of Žigmund Dvorský from Polešovice and Anna Maňásková in Boršice (1742)',
    'Stará mama Becky Van Vleet': 'Grandmother of Becky Van Vleet',
    'Starší brat Alžbety Šustrovej (#43), narodený 19. 1. 1801 v Rybářoch čp. 11.': 'Elder brother of Alžbeta Šustrová (#43), born 19 Jan 1801 in Rybáře No. 11.',
    'Syn Arthura Troyana a Marcie (deceased)': 'Son of Arthur Troyan and Marcia (deceased)',
    'Syn Bibiany Jurčákovej a Borisa Marcinova': 'Son of Bibiana Jurčáková and Boris Marcinov',
    'Syn Františka Holevu (* 1921)': 'Son of František Holeva (* 1921)',
    'Syn Františka Holevu (* 1921), BAPOS 02/05/3/8': 'Son of František Holeva (* 1921), BAPOS 02/05/3/8',
    'Syn Jána Holevu (* 1871) a Anny Gentilini': 'Son of Ján Holeva (* 1871) and Anna Gentilini',
    'Syn Vincenta Holevu a Márie Lenčickej (BAPOS 02/02/2/6)': 'Son of Vincent Holeva and Mária Lenčická (BAPOS 02/02/2/6)',
    'Syn Vincenta Holevu a Márie Lenčickej, pochovaný s dedom Jánom (BAPOS 02/04/3/28)': 'Son of Vincent Holeva and Mária Lenčická, buried with grandfather Ján (BAPOS 02/04/3/28)',
    'Súpis obyvateľstva Gaboltova 1869, dom č. 18 (rodina Choleva)': '1869 Census of Gaboltov, house No. 18 (Choleva family)',
    'Sčítanie ľudu 1930 Bardejov – Zábava čp. 1 – vdova Veronika Zámborská a stolár Ondrej': '1930 Census Bardejov – Zábava No. 1 – widow Veronika Zámborská and carpenter Ondrej',
    'Sčítanie ľudu 1930 Bardejov, Fabry ul. 6 / čp. 608 – Andrej Holeva (#14), Anna (#15) a dom Jozefa Jurčáka': '1930 Census Bardejov, Fabry St. 6 / No. 608 – Andrej Holeva (#14), Anna (#15), and house of Jozef Jurčák',
    'Sčítanie ľudu 1930 Bardejov, Kláštorská 11 / čp. 164 – Karel Pšenička (#10), Alžbeta (#11) a Pirožka (#5)': '1930 Census Bardejov, Kláštorská 11 / No. 164 – Karel Pšenička (#10), Alžbeta (#11), and Pirožka (#5)',
    'Sčítanie ľudu 1930 Veľká Ida čp. 29 – Štefan Bučina (* 1850) a Barbora (* 1852)': '1930 Census Veľká Ida No. 29 – Štefan Bučina (* 1850) and Barbora (* 1852)',
    'Sčítanie ľudu 1930, Gočovo č. 108 (Tomáš Váci a rodina)': '1930 Census Gočovo No. 108 (Tomáš Váci and family)',
    'Vydatá Kataníková; dcéra Františka Holevu (* 1921), nájomkyňa rodinného hrobu v Bardejove': 'Married name Kataníková; daughter of František Holeva (* 1921), lessee of the family grave in Bardejov',
    'Vydatá Van Vleet; autorka rodokmeňa BeckyVanVleet': 'Married name Van Vleet; author of the BeckyVanVleet family tree',
    'Vypočítané z veku pri sobáši (17 rokov dňa 30. 6. 1822)': 'Calculated from age at marriage (17 years on 30 Jun 1822)',
    'Vyslúžený patentovaný cisársky vojak a bača vo Veľkej Ide č. 25': 'Retired imperial soldier (Patentinvalid) and head shepherd in Veľká Ida No. 25',
    'holič (borbély)': 'barber (borbély)',
    'majitel pozemkov / gazda (Grundbesitzer)': 'landowner / farmer (Grundbesitzer)',
    'otec Zuzany Jurčákovej': 'father of Zuzana Jurčáková',
    'vinár (Weiner)': 'vintner (Weiner)',
    'vojak na dovolenke (Urlauber), gramotný (kann)': 'soldier on furlough (Urlauber), literate',
    'Želiar vo Veľkej Ide': 'Cottager (zsellér) in Veľká Ida',
    'Želiar vo Veľkej Ide, syn Jána Bučinu a Kataríny Oroszovej': 'Cottager (zsellér) in Veľká Ida, son of Ján Bučina and Katarína Oroszová',
};

function translateLineEn(line: string): string {
    const trimmed = line.trim();
    if (!trimmed) return line;
    if (EXACT_EN[trimmed]) return EXACT_EN[trimmed];
    if (trimmed.startsWith('r. ')) {
        const rest = trimmed.slice(3);
        if (rest === 'Jurčáková, manželka Radoslava Dvorského') {
            return 'née Jurčáková, wife of Radoslav Dvorský';
        }
        if (rest === 'Vatechová, matka Zuzany Jurčákovej') {
            return 'née Vatechová, mother of Zuzana Jurčáková';
        }
        return `née ${rest}`;
    }
    if (trimmed === '{geni:occupation} Lekár') return 'Occupation: Physician';
    if (trimmed === '{geni:occupation} Manažér') return 'Occupation: Manager';
    if (trimmed === '{geni:occupation} Učiteľka') return 'Occupation: Teacher';
    if (trimmed === 'Religion — Křesťanské: Lead — not proven by a record.') {
        return 'Religion — Christian: Lead — not proven by a record.';
    }
    return line;
}

/**
 * Translate GEDCOM-derived notes, occupations, and event descriptions when
 * the viewer language is English (`en`). Returns the original string for all
 * other languages.
 */
export function translateDataText(text: string, lang: Language): string {
    if (!text || lang !== 'en') return text;
    if (EXACT_EN[text.trim()]) return EXACT_EN[text.trim()];
    return text.split('\n').map(translateLineEn).join('\n');
}

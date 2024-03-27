({
    "title": "MASTER PIECE",
    "missions": [{
            "title": "EIB בונוס בדיקת הציוד",
            "description": "אם כל הציוד שלכם נכנס באזור הביקורת הקטן כאשר אתם מגיעים למקצה, תקבלו נקודות בונוס.",
            "objectives": [{
                "id": "bonus",
                "title": "כל ציוד הצוות מתאים לאזור שילוח אחד וקטן מ-12 אינץ‘. (305 מ“מ)",
                "type": "yesno",
                "default": "no"
            }],
            "score": [function(bonus) {
                bonus = String(bonus);
                if (bonus === 'no') {
                    return 0
                }
                if (bonus === 'yes') {
                    return 20
                }
            }]
        },
        {
            "title": "M01 קולנוע בתלת ממד",
            "description": "N/A",
            "objectives": [{
                    "id": "M01_1",
                    "title": "הקרן האדומה של הקולנוע בתלת ממד נמצא לגמרי מימין למסגרת השחורה",
                    "type": "yesno",
                    "default": "no"
                },
            ],
            "score": [function(M01_1) {
                M01_1 = String(M01_1);
                if (M01_1 === 'no') {
                    return 0
                }
                if (M01_1 === 'yes') {
                    return 20
                }
            }]
        },
        {
            "title": "M02 שינוי סצנת התאטרון",
            "description": "N/A",
            "objectives": [
                {
                    "id": "M02_1",
                    "title": "הדגל האדום של התאטרון שלך הורד וצבע הסצנה הפעילה הוא",
                    "options": [
                        {
                            "value": "0",
                            "title": "לא"
                        },
                        {
                            "value": "1",
                            "title": "כחול"
                        },
                        {
                            "value": "2",
                            "title": "ורוד"
                        },
                        {
                            "value": "3",
                            "title": "כתום"
                        }
                    ],
                    "type": "enum",
                    "default": "0"
                },
                {
                    "id": "M02_2",
                    "title": "Both teams' active scenes match",
                    "type": "yesno",
                    "default": "no"
                }
            ],
            "score": [function(M02_2, M02_1) {
                M02_1 = String(M02_1);
                M02_2 = String(M02_2);
                if (M02_2 === 'no') {
                    switch (M02_1) {
                        case '0':
                            return 0;
                        case '1':
                            return 10;
                        case '2':
                            return 20;
                        case '3':
                            return 30;
                    }
                }
                if (M02_2 === 'yes') {
                    switch(M02_1) {
                        case '0':
                            return 0;
                        case '1':
                            return 30;
                        case '2':
                            return 50;
                        case '3':
                            return 40;
                    }
                }
            }]
        },
        {
            "title": "M03 חוויה סוחפת",
            "description": "N/A",
            "objectives": [{
                    "id": "M03",
                    "title": "שלושת מסכי החוויה הסוחפת מורמים",
                    "type": "yesno",
                    "default": "no"
                }],
            "score": [function(M03_1) {
                M03_1 = String(M03_1);
                if (M03_1 === 'no') {
                    return 0;
                }
                if (M03_1 === 'yes') {
                    return 20;
                }
            }]
        },
        {
            "title": "M04 MASTERPIECE",
            "description": "N/A",
            "objectives": [{
                    "id": "M04_1",
                    "title": "היצירת אומנות של הקבוצה היא לפחות חלקית בתוך אזור המוזיאון",
                    "type": "yesno",
                    "default": "no"
                },
                {
                    "id": "M04_2",
                    "title": "יצירת האמנות נתמכת לגמרי על ידי המעמד",
                    "type": "yesno",
                    "default": "no"
                }
            ],
            "score": [function(M04_1, M04_2) {
                M04_1 = String(M04_1);
                M04_2 = String(M04_2);
                if (M04_1 === 'no') {
                    return 0;
                }
                if (M04_1 === 'yes') {
                    if (M04_2 === 'no') {
                        return 10;
                    }
                    if (M04_2 === 'yes') {
                        return 30;
                    }
                }
            }]
        },
{
            "title": "M05 פסל מציאות רבודה",
            "description": "N/A",
            "objectives": [{
                    "id": "M05_1",
                    "title": "הידית הכתומה של פסל המציאות הרבודה מסובבת לגמרי לימין",
                    "type": "yesno",
                    "default": "no",
                },
            ],
            "score": [function(M05_1) {
                M05_1 = String(M05_1);
                if(M05_1 === 'no') {
                    return 0;
                }
                if(M05_1 === 'yes') {
                    return 30;
                }
            }]
        },
{
            "title": "M06 אורות וצלילים של הקונצרט המוזיקלי",
            "description": "N/A",
            "objectives": [{
                    "id": "M06_1",
                    "title": "הידית הכתומה של האורות מסובבת לגמרי למטה",
                    "type": "yesno",
                    "default": "no"
                },
                {
                    "id": "M06_2",
                    "title": "הידית הכתומה של הרמקולים מסובבת לגמרי לשמאל",
                    "type": "yesno",
                    "default": "no",
                }
            ],
            "score": [function(M06_1, M06_2) {
                M06_1 = String(M06_1);
                M06_2 = String(M06_2);
                if (M06_1 === 'no' && M06_2 === 'no') {
                    return 0;
                }
                if (M06_1 === 'yes' && M06_2 === 'no' || M06_1 === 'no' && M06_2 === 'yes' ) {
                    return 10;
                }
                if (M06_1 == 'yes' && M06_2 === 'yes') {
                    return 20;
                }
            }]
        },
{
            "title": "M07 אומן הולוגרמה",
            "description": "N/A",
            "objectives": [
                {
                    "id": "M07_1",
                    "title": "לחצן ההפעלה הכתום של אומן ההולוגרמה נמצאת לגמרי מעבר לקו הבמה השחור",
                    "type": "yesno",
                    "default": "no",
                }
            ],
            "score": [function(M07_1) {
                M07_1 = String(M07_1);
                if (M07_1 === 'no') {
                    return 0;
                } 
                if (M07_1 === 'yes') {
                    return 20;
                }
            }]
        },
        {
            "title": "M08 מצלמה מתגלגלת",
            "description": "N/A",
            "objectives": [
                {
                    "id": "M08_1",
                    "title": "הסמן הלבן של המצלמה המתגלגלת נמצא מצד שמאל של",
                    "options": [
                        {
                            "value": "0",
                            "title": "כלום"
                        },
                        {
                            "value": "1",
                            "title": "כחול כהה"
                        },
                        {
                            "value": "2",
                            "title": "כחול כהה ובינוני"
                        },
                        {
                            "value": "3",
                            "title": "כחול כהה, בינוני ובהיר"
                        }
                    ],
                    "type": "enum",
                    "default": "0",
                }
            ],
            "score": [function(M08_1) {
                M08_1 = String(M08_1);
                switch(M08_1) {
                    case '0':
                        return 0;
                    case '1':
                        return 10;
                    case '2':
                        return 20;
                    case '3':
                        return 30;
                }
            }]
        },
{
            "title": "M09 סט סרטים",
            "description": "N/A",
            "objectives": [
                {
                    "id": "M09_1",
                    "title": "הסירה נוגעת בתחתית והיא לגמרי מעבר לקו הסצנה השחור",
                    "type": "yesno",
                    "default": "no",
                },
                {
                    "id": "M09_2",
                    "title": "המצלמה נוגעת בתחתית והיא בחלקה לפחות באזור המצלמה המיועד",
                    "type": "yesno",
                    "default": "no",
                },
            ],
            "score": [function(M09_1, M09_2) {
                M09_1 = String(M09_1);
                M09_2 = String(M09_2);
                if(M09_1 === 'no' && M09_2 === 'no') {
                    return 0;
                }
                if(M09_1 === 'no' && M09_2 === 'yes' || M09_1 === 'yes' && M09_2 === 'no') {
                    return 10;
                }
                if(M09_1 === 'yes' && M09_2 === 'yes') {
                    return 10;
                }
            }]
        },
        {
            "title": "M10 מערבל קול",
            "description": "N/A",
            "objectives": [{
                "id": "M10_1",
                "title": "מספר סרגלים של מערבלי קול שמורמים",
                "options": [
                    {
                        "value": "0",
                        "title": "0"
                    },
                    {
                        "value": "1",
                        "title": "1"
                    },
                    {
                        "value": "2",
                        "title": "2"
                    },
                    {
                        "value": "3",
                        "title": "3"
                    }
                ],
                "type": "enum",
                "default": "0"
            }],
            "score": [function(M10_1) {
                M10_1 = String(M10_1);
                switch(M10_1) {
                    case 0:
                        return 0;
                    case 1:
                        return 10;
                    case 2:
                        return 20;
                    case 3:
                        return 30;
                }
            }]
        },
        {
            "title": "M11 מופע אורות",
            "description": "N/A",
            "objectives": [{
                "id": "M11_1",
                "title": "הסמן הלבן של מופע האורות נמצא בתוך התחום",
                "options": [{
                        "value": "0",
                        "title": "כלל לא"
                    },
                    {
                        "value": "1",
                        "title": "צהוב"
                    },
                    {
                        "value": "2",
                        "title": "ירוק"
                    },
                    {
                        "value": "3",
                        "title": "כחול"
                    }
                ],
                "type": "enum",
                "default": "0"
            }],
            "score": [function(M11_1) {
                M11_1 = String(M11_1);
                switch(M11_1) {
                    case 0:
                        return 0;
                    case 1:
                        return 10;
                    case 2:
                        return 20;
                    case 3:
                        return 30;
                }
            }]
        },
{
            "title": "M12 אומן מציאות וירטואלית",
            "description": "N/A",
            "objectives": [
                {
                    "id": "M12_1",
                    "title": "התרנגולת לא נפגעה והיא זזה מנקודת המוצא שלה",
                    "type": "yesno",
                    "default": "no"
                },
                {
                    "id": "M12_2",
                    "title": "התרנגולת עברה או לגמרי מעבר לנקודה בצבע לבנדר",
                    "type": "yesno",
                    "default": "none"
                },
            ],
            "score": [function(M12_1, M12_2) {
                M12_1 = String(M12_1);
                M12_2 = String(M12_2);
                if (M12_1 === 'no') {
                    return 0;
                }
                if (M12_1 === 'yes') {
                    if (M12_2 === 'no') {
                        return 10;
                    }
                    if (M12_2 === 'yes') {
                        return 30;
                    }
                }
            }]
        },
        {
            "title": "M13 יוצר אמנות",
            "description": "N/A",
            "objectives": [
                {
                    "id": "M13_1",
                    "title": "המכסה הכתום ולבן של מכונת האומן פתוח לגמרי ",
                    "type": "yesno",
                    "default": "no",
                },
                {
                    "id": "M13_2",
                    "title": "הבריח הוורוד בהיר של מכונת האומן מכוון ישר למטה ",
                    "type": "yesno",
                    "default": "no",
                },
            ],
            "score": [function(M13_1, M13_2) {
                M13_1 = String(M13_1);
                M13_2 = String(M13_2);
                if (M13_1 === 'no' && M13_2 === 'no') {
                    return 0;
                }
                if (M13_1 === 'no' && M13_2 === 'yes') {
                    return 20;
                }
                if (M13_1 === 'yes' && M13_2 === 'no') {
                    return 10;
                }
                if (M13_1 === 'yes' && M13_2 === 'yes') {
                    return 30;
                }
            }]
        },
        {
            "title": "M14 מסירה לקהל",
            "description": "N/A",
            "objectives": [{
                    "id": "M14_1",
                    "title": "מספר האנשים בקהל לגמרי ביעד",
                    "options": [
                        {
                            "value": "0",
                            "title": "0"
                        },
                        {
                            "value": "1",
                            "title": "1"
                        },
                        {
                            "value": "2",
                            "title": "2"
                        },
                        {
                            "value": "3",
                            "title": "3"
                        },
                        {
                            "value": "4",
                            "title": "4"
                        },
                        {
                            "value": "5",
                            "title": "5"
                        },
                        {
                            "value": "6",
                            "title": "6"
                        },
                        {
                            "value": "7",
                            "title": "7"
                        }
                    ],
                    "type": "enum",
                    "default": "0"
                },
                {
                    "id": "M14_2",
                    "title": "מספר היעדים עם לפחות אחד מהאנשים בקהל לגמרי בתוכו",
                    "options": [
                        {
                            "value": "0",
                            "title": "0"
                        },
                        {
                            "value": "1",
                            "title": "1"
                        },
                        {
                            "value": "2",
                            "title": "2"
                        },
                        {
                            "value": "3",
                            "title": "3"
                        },
                        {
                            "value": "4",
                            "title": "4"
                        },
                        {
                            "value": "5",
                            "title": "5"
                        },
                        {
                            "value": "6",
                            "title": "6"
                        },
                        {
                            "value": "7",
                            "title": "7"
                        }
                    ],
                    "type": "enum",
                    "default": "0"
                }
            ],
            "score": [function(M14_1, M14_2) {
                M14_1 = String(M14_1);
                M14_2 = String(M14_2);
                // I don't know if this will work, so if there is a problem, check here
                a = 0;
                b = 0;
                switch (M14_1) {
                    case 0:
                        a = 0;
                    case 1:
                        a = 5;
                    case 2:
                        a = 10;
                    case 3:
                        a = 15;
                    case 4:
                        a = 20;
                    case 5:
                        a = 25;
                    case 6:
                        a = 30;
                    case 7:
                        a = 35;
                }
                switch (M14_2) {
                    case 0:
                        b = 0;
                    case 1:
                        b = 5;
                    case 2:
                        b = 10;
                    case 3:
                        b = 15;
                    case 4:
                        b = 20;
                    case 5:
                        b = 25;
                    case 6:
                        b = 30;
                    case 7:
                        b = 35;
                }
                // This is another spot I don't know if it will work
                return a+b ;
            }]
        },
        {
            "title": "M15 מסירה למומחים",
            "description": "N/A",
            "objectives": [{
                    "id": "M15_1",
                    "title": "מספר המומחים שנמצאים לפחות חלקית ביעד שלהם",
                    "options": [
                        {
                            "value": "0",
                            "title": "0"
                        },
                        {
                            "value": "1",
                            "title": "1"
                        },
                        {
                            "value": "2",
                            "title": "2"
                        },
                        {
                            "value": "3",
                            "title": "3"
                        },
                        {
                            "value": "4",
                            "title": "4"
                        },
                        {
                            "value": "5",
                            "title": "5"
                        },
                        {
                            "value": "6",
                            "title": "6"
                        }
                    ],
                    "type": "enum",
                    "default": "0"
                }
            ],
            "score": [function(M15_1) {
                M15_1 = Number(M15_1);
                return M15_1 * 10;
            }]
        },
        {
            "title": "PT אסימוני דיוק",
            "description": "ככל שתפריעו לרובוט פחות פעמים מחוץ לבית, יישארו לכם יותר נקודות.",
            "objectives": [{
                "id": "precision",
                "title": "מספר אסימוני הדיוק הנותרו על הזירה:",
                "options": [{
                        "value": "0",
                        "title": "0"
                    },
                    {
                        "value": "1",
                        "title": "1"
                    },
                    {
                        "value": "2",
                        "title": "2"
                    },
                    {
                        "value": "3",
                        "title": "3"
                    },
                    {
                        "value": "4",
                        "title": "4"
                    },
                    {
                        "value": "5",
                        "title": "5"
                    },
                    {
                        "value": "6",
                        "title": "6"
                    }
                ],
                "type": "enum",
                "default": "6"
            }],
            "score": [function(precision) {
                precision = String(precision);
                if (precision === '0') {
                    return 0
                }
                if (precision === '1') {
                    return 10
                }
                if (precision === '2') {
                    return 15
                }
                if (precision === '3') {
                    return 25
                }
                if (precision === '4') {
                    return 35
                }
                if (precision === '5') {
                    return 50
                }
                if (precision === '6') {
                    return 50
                }
            }]
        },
        // {
        //     "title": "Gracious Professionalism",
        //     "description": "This category is not counted towards the overall score.",
        //     "objectives": [{
        //             "id": "GP",
        //             "title": "Gracious Professionalism displayed at the robot game table:",
        //             "options": [
        //                 {
        //                     "value": "2",
        //                     "title": "מתפתחת 2"
        //                 },
        //                 {
        //                     "value": "3",
        //                     "title": "מצטיינת 3"
        //                 },
        //                 {
        //                     "value": "4",
        //                     "title": "למופת 4"
        //                 }
        //             ],
        //             "type": "enum",
        //             "default": "0"
        //         },
        //     ],
        //     "score": [function(GP) {
        //         return 0;
        //     }]
        // },
    ],
    "strings": {
        "yes": "כן",
        "no": "לא",
        "None": "כלום"
    },
    "rtl": false
})
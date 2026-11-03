/**
 * Slovak UI strings for Strom Family Tree
 */

import type { StringsType } from './strings.js';

export function buildSlovakStrings(cz: StringsType): StringsType {
    const sk = JSON.parse(JSON.stringify(cz)) as StringsType;

    // Recursive word transformer from Czech to authentic Slovak
    const wordReplacements: [RegExp, string][] = [
        [/\bNarození\b/g, 'Narodenie'],
        [/\bnarození\b/g, 'narodenie'],
        [/\bKřest\b/g, 'Krst'],
        [/\bkřest\b/g, 'krst'],
        [/\bSňatek\b/g, 'Sobáš'],
        [/\bsňatek\b/g, 'sobáš'],
        [/\bÚmrtí\b/g, 'Úmrtie'],
        [/\búmrtí\b/g, 'úmrtie'],
        [/\bPohřeb\b/g, 'Pohreb'],
        [/\bpohřeb\b/g, 'pohreb'],
        [/\bPředkové\b/g, 'Predkovia'],
        [/\bpředkové\b/g, 'predkovia'],
        [/\bPředek\b/g, 'Predok'],
        [/\bpředek\b/g, 'predok'],
        [/\bPotomci\b/g, 'Potomkovia'],
        [/\bpotomci\b/g, 'potomkovia'],
        [/\bPotomek\b/g, 'Potomok'],
        [/\bpotomek\b/g, 'potomok'],
        [/\bPříbuzní\b/g, 'Príbuzní'],
        [/\bpříbuzní\b/g, 'príbuzní'],
        [/\bSourozenci\b/g, 'Súrodenci'],
        [/\bsourozenci\b/g, 'súrodenci'],
        [/\bSourozenec\b/g, 'Súrodenec'],
        [/\bsourozenec\b/g, 'súrodenec'],
        [/\bRodiče\b/g, 'Rodičia'],
        [/\brodiče\b/g, 'rodičia'],
        [/\bDěti\b/g, 'Deti'],
        [/\bděti\b/g, 'deti'],
        [/\bDítě\b/g, 'Dieťa'],
        [/\bdítě\b/g, 'dieťa'],
        [/\bDcera\b/g, 'Dcéra'],
        [/\bdcera\b/g, 'dcéra'],
        [/\bSyn\b/g, 'Syn'],
        [/\bsyn\b/g, 'syn'],
        [/\bOtec\b/g, 'Otec'],
        [/\botec\b/g, 'otec'],
        [/\bMatka\b/g, 'Matka'],
        [/\bmatka\b/g, 'matka'],
        [/\bManželství\b/g, 'Manželstvo'],
        [/\bmanželství\b/g, 'manželstvo'],
        [/\bManželka\b/g, 'Manželka'],
        [/\bmanželka\b/g, 'manželka'],
        [/\bManžel\b/g, 'Manžel'],
        [/\bmanžel\b/g, 'manžel'],
        [/\bPartneři\b/g, 'Partneri'],
        [/\bpartneři\b/g, 'partneri'],
        [/\bHledat\b/g, 'Hľadať'],
        [/\bhledat\b/g, 'hľadať'],
        [/\bNastavení\b/g, 'Nastavenia'],
        [/\bnastavení\b/g, 'nastavenia'],
        [/\bNápověda\b/g, 'Pomocník'],
        [/\bnápověda\b/g, 'pomocník'],
        [/\bUložit\b/g, 'Uložiť'],
        [/\buložit\b/g, 'uložiť'],
        [/\bZrušit\b/g, 'Zrušiť'],
        [/\bzrušit\b/g, 'zrušiť'],
        [/\bZavřít\b/g, 'Zavrieť'],
        [/\bzavřít\b/g, 'zavrieť'],
        [/\bZpět\b/g, 'Späť'],
        [/\bzpět\b/g, 'späť'],
        [/\bVpřed\b/g, 'Vpred'],
        [/\bvpřed\b/g, 'vpred'],
        [/\bTisk\b/g, 'Tlač'],
        [/\btisk\b/g, 'tlač'],
        [/\bPlakát\b/g, 'Plagát'],
        [/\bplakát\b/g, 'plagát'],
        [/\bVějíř\b/g, 'Vejár'],
        [/\bvějíř\b/g, 'vejár'],
        [/\bČasová osa\b/g, 'Časová os'],
        [/\bčasová osa\b/g, 'časová os'],
        [/\bVíce\b/g, 'Viac'],
        [/\bvíce\b/g, 'viac'],
        [/\bVše\b/g, 'Všetko'],
        [/\bvše\b/g, 'všetko'],
        [/\bŽijící\b/g, 'Žijúci'],
        [/\bžijící\b/g, 'žijúci'],
        [/\bZemřelý\b/g, 'Zosnulý'],
        [/\bzemřelý\b/g, 'zosnulý'],
        [/\bZemřela\b/g, 'Zomrela'],
        [/\bzemřela\b/g, 'zomrela'],
        [/\bZemřel\b/g, 'Zomrel'],
        [/\bzemřel\b/g, 'zomrel'],
        [/\bNarodil se\b/g, 'Narodil sa'],
        [/\bnarodil se\b/g, 'narodil sa'],
        [/\bNarodila se\b/g, 'Narodila sa'],
        [/\bnarodila se\b/g, 'narodila sa'],
        [/\bPohlaví\b/g, 'Pohlavie'],
        [/\bpohlaví\b/g, 'pohlavie'],
        [/\bMuž\b/g, 'Muž'],
        [/\bmuž\b/g, 'muž'],
        [/\bŽena\b/g, 'Žena'],
        [/\bžena\b/g, 'žena'],
        [/\bNeznámé\b/g, 'Neznáme'],
        [/\bneznámé\b/g, 'neznáme'],
        [/\bNeznámý\b/g, 'Neznámy'],
        [/\bneznámý\b/g, 'neznámy'],
        [/\bNeznámá\b/g, 'Neznáma'],
        [/\bneznámá\b/g, 'neznáma'],
        [/\bMísto\b/g, 'Miesto'],
        [/\bmísto\b/g, 'miesto'],
        [/\bMísta\b/g, 'Miesta'],
        [/\bmísta\b/g, 'miesta'],
        [/\bVěk\b/g, 'Vek'],
        [/\bvěk\b/g, 'vek'],
        [/\bPovolání\b/g, 'Povolanie'],
        [/\bpovolání\b/g, 'povolanie'],
        [/\bPoznámka\b/g, 'Poznámka'],
        [/\bpoznámka\b/g, 'poznámka'],
        [/\bPoznámky\b/g, 'Poznámky'],
        [/\bpoznámky\b/g, 'poznámky'],
        [/\bZdroje\b/g, 'Zdroje'],
        [/\bzdroje\b/g, 'zdroje'],
        [/\bZdroj\b/g, 'Zdroj'],
        [/\bzdroj\b/g, 'zdroj'],
        [/\bCitace\b/g, 'Citácia'],
        [/\bcitace\b/g, 'citácia'],
        [/\bKniha\b/g, 'Kronika'],
        [/\bkniha\b/g, 'kronika'],
        [/\bGenerace\b/g, 'Generácia'],
        [/\bgenerace\b/g, 'generácia'],
        [/\bPokolení\b/g, 'Pokolenie'],
        [/\bpokolení\b/g, 'pokolenie'],
        [/\bKolem\b/g, 'Okolo'],
        [/\bkolem\b/g, 'okolo'],
        [/\bPřed\b/g, 'Pred'],
        [/\bpřed\b/g, 'pred'],
        [/\bPo\b/g, 'Po'],
        [/\bpo\b/g, 'po'],
        [/\bOdhadem\b/g, 'Odhadom'],
        [/\bodhadem\b/g, 'odhadom'],
        [/\bVypočteno\b/g, 'Vypočítané'],
        [/\bvypočteno\b/g, 'vypočítané'],
        [/\bMezi\b/g, 'Medzi'],
        [/\bmezi\b/g, 'medzi'],
        [/\brok\b/g, 'rok'],
        [/\broky\b/g, 'roky'],
        [/\blet\b/g, 'rokov'],
        [/\bměsíců\b/g, 'mesiacov'],
        [/\bměsíce\b/g, 'mesiace'],
        [/\bměsíc\b/g, 'mesiac'],
        [/\bdní\b/g, 'dní'],
        [/\bdny\b/g, 'dni'],
        [/\bden\b/g, 'deň'],
    ];

    function translateObject(obj: Record<string, unknown>): void {
        for (const [key, val] of Object.entries(obj)) {
            if (typeof val === 'string') {
                let s = val;
                for (const [pattern, replacement] of wordReplacements) {
                    s = s.replace(pattern, replacement);
                }
                obj[key] = s;
            } else if (val && typeof val === 'object') {
                translateObject(val as Record<string, unknown>);
            }
        }
    }

    translateObject(sk as unknown as Record<string, unknown>);

    // Leaf overrides for explicit fidelity
    if (sk.toolbar) {
        sk.toolbar.addPerson = 'Pridať osobu';
        sk.toolbar.newTree = 'Nový strom';
    }
    if (sk.viewModeSwitch) {
        sk.viewModeSwitch.family = 'Rodina';
        sk.viewModeSwitch.descendants = 'Potomkovia';
        sk.viewModeSwitch.timeline = 'Časová os';
        sk.viewModeSwitch.fan = 'Vejár';
        sk.viewModeSwitch.map = 'Mapa';
    }
    if (sk.search) {
        sk.search.open = 'Hľadať';
        sk.search.cancel = 'Zrušiť';
        sk.search.clear = 'Vymazať';
    }
    if (sk.gender) {
        sk.gender.male = 'Muž';
        sk.gender.female = 'Žena';
        sk.gender.unknown = 'Neznáme';
    }
    if (sk.buttons) {
        sk.buttons.save = 'Uložiť';
        sk.buttons.cancel = 'Zrušiť';
        sk.buttons.close = 'Zavrieť';
        sk.buttons.delete = 'Zmazať';
        sk.buttons.add = 'Pridať';
        sk.buttons.continue = 'Pokračovať';
        sk.buttons.manageRelationships = 'Upraviť vzťahy';
    }
    if (sk.settings) {
        sk.settings.title = 'Nastavenia';
        sk.settings.language = 'Jazyk';
        sk.settings.languageSystem = 'Systémový (podľa prehliadača)';
        sk.settings.theme = 'Vzhľad';
        sk.settings.themeLight = 'Svetlý';
        sk.settings.themeDark = 'Tmavý';
        sk.settings.themeSystem = 'Podľa systému';
    }
    if (sk.focus) {
        sk.focus.ancestorsLabel = 'Predkovia';
        sk.focus.descendantsLabel = 'Potomkovia';
    }

    return sk;
}

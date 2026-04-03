export interface Article {
  id: number
  slug: string
  category: 'Actualités' | 'Héritage & Culture' | 'Diaspora Pratique'
  date: string
  dateISO: string
  readTime: string
  title: string
  metaDescription: string
  excerpt: string
  content: string
  icon: string
  colorBg: string
  colorText: string
  keywords: string[]
}

export const ARTICLES: Article[] = [
  {
    id: 1,
    slug: 'lancement-officiel-badoumka-usa',
    category: 'Actualités',
    date: '15 mars 2026',
    dateISO: '2026-03-15',
    readTime: '6 min',
    title: 'Lancement officiel de Badoumka USA : une nouvelle page s\'ouvre',
    metaDescription: 'Retour sur la fondation de Badoumka USA, l\'association des Fils et Filles de Badoumka aux États-Unis. Histoire, vision et premiers pas de notre communauté.',
    excerpt: 'Après des mois de préparation et de mobilisation au sein de notre diaspora, l\'Association des Fils et Filles de Badoumka aux États-Unis tient désormais ses premières réunions officielles. Retour sur une fondation historique.',
    keywords: ['Badoumka USA', 'association camerounaise', 'diaspora Badoumka', 'fondation association', 'Cameroun États-Unis'],
    content: `Notre communauté dispersée à travers les États-Unis — des Fils et Filles de Badoumka qui ont quitté le village à la recherche d'opportunités — a franchi une étape décisive en 2024 avec la fondation formelle de Badoumka USA.

L'association est née d'un constat simple : nos compatriotes de Badoumka vivent souvent isolés, loin de leur famille, de leurs traditions, et d'un soutien communautaire solide. Face à ce manque, un groupe de fondateurs s'est réuni avec une vision claire : créer un espace d'appartenance, de solidarité et de transmission culturelle.

**Notre devise**

Guidée par la devise *"Servir avec honneur, unir avec sagesse, transmettre avec amour"*, l'association structure ses activités autour de trois piliers fondamentaux qui reflètent nos valeurs profondes : l'unité, l'intégrité, la solidarité et l'héritage.

**Washington D.C. : notre siège et notre hub**

Washington D.C. et la région métropolitaine (DMV) accueillent actuellement notre siège social et la majorité de nos membres. Cette région est le cœur de notre mouvement — une zone où la migration de Badoumka est particulièrement forte, créant une fondation naturelle pour notre organisation. C'est d'ici que nous coordonnons nos efforts et que nous planifions notre expansion.

**Un début modeste mais significatif**

Nous commençons petit mais avec une détermination claire. Chaque mois, tous nos membres se réunissent le deuxième dimanche pour renforcer nos liens, partager nos expériences et planifier notre avenir. Ces réunions mensuelles sont le cœur battant de Badoumka USA — un moment où chacun se sent entendu, valorisé et connecté.

**Nos trois piliers**

Bien que nous soyons au stade initial, nous avons déjà identifié les trois domaines qui guideront notre croissance :

**Infrastructure** — Maintenir et renforcer le lien entre Badoumka (village) et Badoumka USA (diaspora). À mesure que nous grandissons, nous aurons les ressources pour soutenir des projets de développement au village.

**Relève** — Transmettre à la prochaine génération notre langue, nos traditions et notre identité. Nous planifions le lancement de programmes de mentorat et d'ateliers culturels pour nos enfants.

**Gouvernance** — Opérer avec transparence radicale et responsabilité envers nos membres. Chaque décision est prise collectivement, chaque dollar est compté, chaque voix importe.

**Regarder vers l'avenir**

Notre vision pour Badoumka USA est ambitieuse. Dans les années à venir, nous visons à :

- Étendre notre présence à d'autres régions des États-Unis où vivent des Fils et Filles de Badoumka
- Lancer des programmes formels (Héritiers Badoumka pour la jeunesse, Badoumka Cares pour l'entraide communautaire)
- Créer des partenariats économiques qui prospèrent dans la diaspora ET bénéficient au village
- Construire une organisation qui durera 100 ans, pas juste 10

Nous savons qu'il existe une demande réelle. Les appels téléphoniques, les messages, les demandes d'adhésion — tout cela nous dit que nous avons frappé un besoin profond chez nos compatriotes dispersés.

**Ce que les premiers membres en disent**

*"Après des années d'isolement, j'ai finalement trouvé ma communauté. Badoumka USA me fait sentir moins seul."* — Un membre fondateur

*"C'est beau de savoir que mes enfants pourront connaître leurs racines Badoumka à travers une communauté qui partage les mêmes valeurs."* — Une mère de famille

**Le calendrier de Badoumka USA**

Les réunions se tiennent chaque **deuxième dimanche du mois** à Washington D.C. Ces rencontres sont ouvertes à tout fils ou fille de Badoumka résidant aux États-Unis. Qu'il s'agisse de vos premiers pas ou de votre retour, vous êtes bienvenu(e).

**Rejoignez-nous**

Rejoignez-nous — nous sommes plus forts ensemble. Que vous soyez établi depuis des années ou que vous veniez d'arriver, Badoumka USA vous offre un espace pour appartenir, pour contribuer, et pour préserver l'héritage que nos ancêtres nous ont transmis.

Contactez-nous pour participer à notre prochaine réunion mensuelle.`,
    icon: '📢',
    colorBg: 'bg-[#0F5132]',
    colorText: 'text-white',
  },
  {
    id: 2,
    slug: 'chefferie-badoumka-tradition-millenaire',
    category: 'Héritage & Culture',
    date: '1 mars 2026',
    dateISO: '2026-03-01',
    readTime: '6 min',
    title: 'La Chefferie de Badoumka : gardienne d\'une tradition millénaire',
    metaDescription: 'Découvrez l\'histoire et le rôle de la chefferie traditionnelle de Badoumka au Cameroun. Institution Bamiléké pluriséculaire, gardienne de l\'identité et de la culture Badoumka.',
    excerpt: 'Au cœur du pays Bamiléké au Cameroun, la chefferie de Badoumka incarne une organisation sociale et spirituelle unique. Découvrez l\'histoire et le rôle de cette institution fondatrice de notre identité.',
    keywords: ['chefferie Badoumka', 'Bamiléké tradition', 'culture camerounaise', 'patrimoine Badoumka', 'Cameroun Ouest'],
    content: `La chefferie traditionnelle de Badoumka s'inscrit dans la grande tradition des royaumes Bamiléké des Hauts Plateaux de l'Ouest Cameroun. Institution pluriséculaire, elle constitue le nœud central autour duquel s'organisent la vie sociale, les décisions collectives et la transmission de la mémoire collective.

**Le Chef, figure centrale**

Le Chef — ou *Fon* — n'est pas seulement un chef politique. Il est le gardien des ancêtres, le médiateur entre le monde des vivants et celui des esprits, et le protecteur de l'harmonie sociale. Son autorité est spirituelle autant que temporelle, et les décisions importantes se prennent toujours en consultation avec les notables et les sociétés secrètes.

**Une architecture chargée de sens**

La case du Chef — reconnaissable à ses sculptures de bois ornant poteaux et linteaux — est un véritable musée vivant. Les motifs de grenouilles, de tisserins et d'araignées qui l'ornent ne sont pas de simples décorations : chacun raconte une histoire, un avertissement, une promesse. Ces symboles sont aussi présents dans le tissu kente qui accompagne nos cérémonies.

**Les sociétés secrètes et la gouvernance**

La chefferie de Badoumka, comme toutes les chefferies Bamiléké, s'appuie sur un réseau de sociétés secrètes — groupes d'âge, associations initiatiques — qui jouent un rôle crucial dans la gouvernance. Ces structures garantissent que le pouvoir ne repose pas sur un seul homme mais sur une communauté organisée.

**Pourquoi le préserver depuis les États-Unis ?**

À des milliers de kilomètres de Badoumka, nos enfants nés ici risquent de grandir sans savoir d'où ils viennent. C'est précisément pourquoi Badoumka USA a inscrit la transmission culturelle au cœur de son projet. Connaître la chefferie, c'est comprendre qui nous sommes — et c'est ce que le programme Héritiers Badoumka s'engage à transmettre.`,
    icon: '🏛️',
    colorBg: 'bg-[#A8391C]',
    colorText: 'text-white',
  },
  {
    id: 3,
    slug: 'integration-identite-camerounaise-usa',
    category: 'Diaspora Pratique',
    date: '18 février 2026',
    dateISO: '2026-02-18',
    readTime: '5 min',
    title: 'S\'intégrer sans se perdre : garder son identité camerounaise aux États-Unis',
    metaDescription: 'Comment préserver son identité camerounaise tout en s\'intégrant aux États-Unis ? Conseils pratiques pour la diaspora Badoumka et camerounaise en Amérique.',
    excerpt: 'Vivre aux États-Unis, c\'est souvent naviguer entre deux mondes. Comment trouver l\'équilibre entre intégration réussie et fidélité à ses racines ? Quelques pistes concrètes pour notre communauté.',
    keywords: ['diaspora camerounaise USA', 'identité culturelle', 'intégration Cameroun', 'communauté africaine États-Unis', 'Badoumka diaspora'],
    content: `L'immigration est une aventure extraordinaire — et un défi identitaire permanent. Pour les Camerounais installés aux États-Unis, la question n'est pas de choisir entre ici et là-bas, mais d'apprendre à habiter les deux à la fois.

**Transmettre la langue**

Le français — et pour beaucoup d'entre nous, les langues locales comme le Bamiléké — est le premier pont vers nos origines. Parler sa langue maternelle à la maison, même partiellement, aide les enfants à ancrer leur identité dans quelque chose de concret. Des associations comme Badoumka USA organisent des activités où nos enfants entendent et pratiquent cette langue naturellement.

**Créer des rituels culturels**

Les fêtes calendaires camerounaises (fête nationale le 20 mai, période des récoltes, cérémonies familiales) peuvent être célébrées même loin du pays. Un repas partagé, une musique, une histoire racontée — ces petits gestes construisent une mémoire familiale puissante que rien ne peut effacer.

**S'appuyer sur la communauté**

L'isolement est l'ennemi principal de l'identité en diaspora. Rejoindre une association communautaire — comme Badoumka USA — c'est se donner accès à un réseau de pairs qui vivent les mêmes tensions, partagent les mêmes références, et peuvent s'entraider concrètement sur le plan financier, professionnel ou émotionnel.

**Voyager au pays régulièrement**

Autant que possible, un retour au Cameroun — même bref — recharge les batteries culturelles d'une façon que rien ne peut remplacer. Pour nos enfants surtout, poser les pieds sur la terre de leurs grands-parents, entendre les voix du marché de Bafoussam, goûter à la cuisine de chez nous, est une expérience fondatrice.

**L'exemple que nous donnons**

En rejoignant et en soutenant Badoumka USA, vous montrez à vos enfants que la fierté de ses origines n'est pas incompatible avec la réussite en Amérique. Au contraire, c'est souvent cette ancre identitaire qui donne la force d'avancer.`,
    icon: '🌍',
    colorBg: 'bg-[#C5A200]',
    colorText: 'text-[#2C1A0E]',
  },
  {
    id: 4,
    slug: 'badoumka-cares-solidarite-communautaire',
    category: 'Actualités',
    date: '5 février 2026',
    dateISO: '2026-02-05',
    readTime: '6 min',
    title: 'Badoumka Cares : la solidarité concrète au service des nôtres',
    metaDescription: 'Le programme Badoumka Cares de l\'association Badoumka USA : comment fonctionne notre fonds d\'entraide communautaire pour les Camerounais aux États-Unis.',
    excerpt: 'Le programme Badoumka Cares incarne la valeur de solidarité qui est au cœur de notre association. Fonctionnement, critères d\'éligibilité, et premiers retours d\'expérience.',
    keywords: ['Badoumka Cares', 'entraide camerounaise', 'solidarité diaspora', 'association Badoumka', 'soutien communautaire USA'],
    content: `Quand un membre de notre communauté traverse une épreuve difficile — maladie, perte d'emploi, deuil, urgence médicale —, personne ne devrait avoir à y faire face seul. C'est la philosophie derrière Badoumka Cares, le programme d'entraide solidaire que nous lançons bientôt.

**Pourquoi Badoumka Cares ?**

En diaspora, nous sommes loin de nos familles élargies qui, au Cameroun, forment le filet de sécurité traditionnel. Quand une crise arrive, beaucoup d'entre nous la gèrent seuls. Badoumka Cares change cela. Il dit : "Vous ne serez jamais seuls. Votre communauté est là pour vous."

**Comment fonctionnera Badoumka Cares ?**

Le modèle est simple mais puissant :

**1. Un fonds communautaire** — Les membres contribuent régulièrement (des montants à être déterminés ensemble). Ce fonds crée un réservoir d'aide mutuellement bénéfique.

**2. Gestion transparente** — Chaque mois, lors de nos réunions, nous partageons les finances. Qui a contribué ? Combien avons-nous en réserve ? Comment sera utilisé cet argent ? Il n'y a pas de mystère.

**3. Processus juste** — Quand un membre demande du soutien, sa demande est traitée avec dignité et discrétion. Un comité examine la situation et décide rapidement.

**4. Confidentialité absolue** — Les détails des situations demeurent confidentiels. Seul le comité le sait.

**Qui peut demander de l'aide ?**

Pour être éligible à Badoumka Cares, vous devrez :

1. Être membre actif depuis au moins 3 mois
2. Avoir participé à au moins 2 réunions mensuelles
3. Être à jour dans vos cotisations

Les types de situations que Badoumka Cares couvrira :
- Urgences médicales inattendues
- Pertes d'emploi temporaires
- Accidents ou décès familial
- Autres crises financières aiguës

**Notre engagement : la transparence radicale**

Badoumka Cares fonctionnera selon le principe de **transparence radicale**. Cela signifie :

- Chaque dollar reçu est compté et rapporté
- Chaque aide distribuée est documentée (de manière anonymisée)
- Chaque membre peut voir exactement où va l'argent
- Les rapports sont présentés chaque mois à tous les membres
- Pas de détournement, pas de favoritisme, pas de secrets

Nous croyons que la confiance naît quand il n'y a rien à cacher.

**Un exemple de ce à quoi cela ressemblera**

Imaginons que Monsieur X — un de nos membres — perde son emploi. Il contacte le Responsable Badoumka Cares. Il remplit un formulaire confidentiel. Il rencontre le comité (en personne ou par téléphone). Dans les 7-10 jours, une décision est prise.

Si approuvée, l'aide est versée directement sur son compte bancaire. Aucune question gênante. Aucune stigmatisation. Juste de la solidarité.

**Quand commence Badoumka Cares ?**

Nous travaillons actuellement à la finalisation des détails :
- Le montant exact de cotisation mensuelle
- Les critères précis d'éligibilité
- La composition du comité de supervision
- Les protocoles de prise de décision

Nous lancerons Badoumka Cares dès que nous aurons un consensus sur ces éléments. Attendez une annonce officielle lors de notre prochaine réunion mensuelle.

**Comment participer dès maintenant**

Si vous êtes intéressé par Badoumka Cares :

1. **Devenez membre de Badoumka USA** — Assistez à une réunion mensuelle (2e dimanche du mois)
2. **Participez à la discussion** — Vos idées sur comment structurer le programme sont bienvenues
3. **Engagez-vous** — Signalez votre intention de cotiser quand le programme lancera

**Ce que cela signifie pour notre communauté**

Badoumka Cares n'est pas juste un fonds d'argent. C'est un engagement mutuellement bénéfique. Il dit : "Je suis responsable pour toi, et tu es responsable pour moi." C'est le fondement de la solidarité véritable — pas la charité, mais la fraternité.

C'est ça, la vision de Badoumka USA : une communauté où chacun sait qu'en cas de crise, il ne sera jamais seul.

**Vous en saurez plus très bientôt. Restez connectés.**

Contactez-nous pour rejoindre Badoumka USA et contribuer à cette vision.`,
    icon: '🤝',
    colorBg: 'bg-[#0F5132]',
    colorText: 'text-white',
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find(a => a.slug === slug)
}

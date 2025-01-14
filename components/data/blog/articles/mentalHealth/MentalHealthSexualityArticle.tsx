import { Container, Divider, List, ListItem, Text, ThemeIcon, Title } from '@mantine/core';
import MonImage from "../../../../assets/blog/sante_mentale/article_1.webp"
import { Article } from '../../topics';
import { IconCheck } from '@tabler/icons-react';

export const MentalHealthSexualityArticle: Article = {
  id: 0,
  name: 'Santé Mentale et Vie Sexuelle chez les Jeunes Hommes : Un Lien Trop Souvent Ignoré',
  picture: MonImage,
  metaTitle: 'Santé Mentale et Vie Sexuelle chez les Jeunes Hommes : Un Lien Souvent Négligé',
  metaDescription: 'Cet article explore comment les pressions sociales, l\'anxiété et la dépression influencent la sexualité des jeunes hommes, et propose des solutions pour restaurer l\'équilibre et la confiance.',
  description: `La santé mentale et la vie sexuelle des jeunes hommes sont étroitement liées, mais souvent ignorées ou mal comprises. Cet article explore comment les pressions sociales, l'anxiété et la dépression influencent la sexualité et la confiance. Il vous guide à travers des solutions pour rétablir l'équilibre, en vous encourageant à parler ouvertement de vos émotions et à aborder ces sujets essentiels pour une vie sexuelle épanouie.`,
  content: (
    <Container component="article" size="md" p="md">
      <Divider my="xl" />
      {/* Article content */}
      <section>
        <Title order={2} my="lg">
          Le Poids des Pressions Sociales et de la Performance
        </Title>
        <Text >
          Pour les jeunes hommes, la pression sociale autour de la performance sexuelle est particulièrement forte. Les attentes culturelles et médiatiques imposent des standards de virilité qui mettent l’accent sur la conquête, la puissance sexuelle, et la capacité à satisfaire son ou ses partenaires.
        </Text>
        <Text >
          Ces attentes irréalistes peuvent engendrer un stress constant, surtout lorsque des problèmes sexuels commencent à émerger. L'anxiété, les troubles de l'image corporelle et parfois la dépression peuvent découler de cette source de pression.
        </Text>
      </section>

      <Divider my="xl" />

      <section>
        <Title order={2} my="lg">
          L'Impact de la Dépression sur la Vie Sexuelle
        </Title>
        <Text >
          La dépression, souvent sous-diagnostiquée chez les jeunes hommes, peut affecter gravement la vie sexuelle. Selon une étude publiée dans *The Journal of Clinical Psychiatry*, la dépression entraîne une perte de libido, des difficultés de concentration sur l’acte sexuel, et une absence de plaisir.
        </Text>
        <Text >
          Un jeune homme en proie à la dépression peut se retrouver confronté à un désintérêt pour les relations intimes. Cela aggrave l’isolement social et affectif, entraînant une dégradation de l’estime de soi.
        </Text>
      </section>

      <Divider my="xl" />

      <section>
        <Title order={2} my="lg">
          Solutions pour Retrouver l’Équilibre
        </Title>
        <Text >
          Voici quelques stratégies pour surmonter ces défis :
        </Text>
        <List
          spacing="sm"
          size="sm"
          icon={
            <ThemeIcon color="teal" size={24} radius="xl">
              <IconCheck />
            </ThemeIcon>
          }
        >
          <ListItem>Parlez ouvertement de vos émotions et de vos doutes avec des proches ou un professionnel de santé.</ListItem>
          <ListItem>Pratiquez des techniques de relaxation comme la méditation ou des exercices de respiration.</ListItem>
          <ListItem>Maintenez un mode de vie sain avec une alimentation équilibrée, de l’exercice régulier, et un sommeil de qualité.</ListItem>
        </List>
        <Text mt="sm">
          Ces efforts peuvent aider à réduire le stress, améliorer la confiance en soi, et favoriser une vie sexuelle épanouie.
        </Text>
      </section>

      <Divider my="xl" />

      <footer>
        <Text ta="center"  >
          En conclusion : parler de santé mentale et sexuelle est essentiel pour dénouer les tabous et encourager des relations saines et équilibrées.
        </Text>
        <Text ta="center" size="sm" color="dimmed">
          N’attendez pas pour demander de l’aide ou initier une discussion. Chaque pas vers une meilleure santé mentale est une victoire.
        </Text>
      </footer>
    </Container>
  )
};

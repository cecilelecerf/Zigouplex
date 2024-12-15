import { Anchor, Container, Divider, List, ListItem, Text, ThemeIcon, Title } from '@mantine/core';
import MonImage from '@/app/assets/image.png';
import { Article } from '../topics';
import { IconCheck } from '@tabler/icons-react';

export const MentalHealthandSexualLifeinYoungMen: Article = {
  id: 1,
  name: 'Santé Mentale et Vie Sexuelle chez les Jeunes Hommes : Un Lien Trop Souvent Ignoré',
  description: `Dans l’intimité, les doutes et les peurs peuvent parfois s’inviter sans prévenir,
        transformant un moment censé être de plaisir et de connexion en une source de stress
        intense. L’anxiété de performance, ce trouble qui touche de nombreuses personnes, n’est pas`,
  picture: MonImage,
  content: (
    <Container component="article" size="md" p="md">
      {/* Header section with main title and meta description */}
      <header>
        <Title order={1} ta="center" my="lg">
          L’anxiété de performance : 5 astuces slow life pour reprendre confiance avec Zigouplex
        </Title>
        <Text component="p" ta="center" color="dimmed" size="lg">
          L’anxiété de performance peut transformer des moments intimes en sources de stress et d’incertitude. Cet article vous propose des stratégies concrètes pour retrouver votre confiance et remettre la complicité au cœur de vos relations.
        </Text>
      </header>

      <Divider my="xl" />

      {/* Article content */}
      <section>
        <Title order={2} my="lg">
          Parce qu’il faut dédramatiser : un problème qui nous touche tous
        </Title>
        <Text component="p">
          On ne va pas se mentir, l’intimité, c’est censé être un moment de partage, de plaisir, de connexion. Mais voilà, parfois, la pression monte (et pas que la pression...). L’anxiété de performance, ça peut arriver à tout le monde, même à ceux qui font du yoga trois fois par semaine et sirotent des matchas bio. Avec un peu d’introspection, quelques gestes simples et un coup de pouce naturel comme <Anchor href="#zigouplex">Zigouplex</Anchor>, vous pouvez retrouver votre sérénité, sans en faire tout un drame.
        </Text>
      </section>

      <Divider my="xl" />

      {/* 5 tips section */}
      <section>
        <Title order={2} my="lg">
          1. Faire un petit check-up émotionnel : pourquoi ça bloque ?
        </Title>
        <Text component="p">
          D’abord, respirez. Mettez un disque de jazz doux en fond sonore, allumez une bougie au bois de santal, et réfléchissez. Est-ce la peur de décevoir ? Des casseroles du passé ? Un besoin compulsif d’être parfait, même sous la couette ?
        </Text>
        <Text component="p" w={500}>
          Petit conseil : notez vos pensées dans un joli carnet en papier recyclé (fabriqué à la main, évidemment). Identifier ce qui vous freine, c’est le premier pas vers une reconnection avec vous-même.
        </Text>
      </section>

      <Divider my="xl" />

      <section>
        <Title order={2} my="lg">
          2. Ouvrir la discussion (avec un bon vin naturel)
        </Title>
        <Text component="p">
          Cliché, mais tellement vrai : tout passe par la communication. Si vous ressentez de la pression, peut-être que votre partenaire est à mille lieues d’imaginer ce que vous traversez. Posez-vous avec une belle bouteille de rouge nature et une playlist bien chill.
        </Text>
        <Text component="p">
          L’idée : partagez vos doutes sans filtre (mais restez classe). Parfois, un simple "je me sens stressé" peut désamorcer une situation tendue. Et pour le reste, un produit comme <Anchor href="#zigouplex">Zigouplex</Anchor> peut vous aider à retrouver votre zénitude sans que ça devienne une mission commando.
        </Text>
      </section>

      <Divider my="xl" />

      <section>
        <Title order={2} my="lg">
          3. Se recentrer avec style : méditation, respiration et thé vert
        </Title>
        <Text component="p">
          Ok, le stress, on connaît. Mais franchement, ça ne mérite pas d’en faire tout un fromage. Essayez la méditation, genre <strong>vraie déconnexion</strong>, pas juste scroller Insta en position lotus. Prenez 5 minutes pour respirer à fond.
        </Text>
        <List
          spacing="sm"
          size="sm"
          icon={
            <ThemeIcon color="teal" size="xs"  >
              <IconCheck />
            </ThemeIcon>
          }
        >
          <ListItem>Allumez un diffuseur d’huiles essentielles (lavande ou eucalyptus, mais bio, of course).</ListItem>
          <ListItem>Inspirez en comptant jusqu’à 4.</ListItem>
          <ListItem>Retenez votre souffle, puis expirez doucement sur 6 secondes.</ListItem>
          <ListItem>Recommencez jusqu’à ce que vous soyez aussi zen qu’après un massage ayurvédique.</ListItem>
        </List>
      </section>

      <Divider my="xl" />

      <section>
        <Title order={2} my="lg">
          4. Adopter un lifestyle ultra-healthy : c’est la base
        </Title>
        <Text component="p">
          Soyons honnêtes, la malbouffe et les nuits courtes, ça n’aide pas à se sentir au top. Prenez soin de vous, de votre corps, de votre esprit. Ça passe par des petits gestes simples mais essentiels.
        </Text>
        <List spacing="sm" size="sm">
          <ListItem>Mangez local, de saison, et si possible, bio. Les fruits à coque, les légumes verts et le poisson gras, c’est votre nouveau combo gagnant.</ListItem>
          <ListItem>Faites du sport, mais dans la joie (genre pilates ou vélo vintage dans les rues pavées).</ListItem>
          <ListItem>Dormez mieux, idéalement entre 7 et 8 heures (et non, pas avec votre téléphone dans la main).</ListItem>
        </List>
      </section>

      <Divider my="xl" />

      <section>
        <Title order={2} my="lg">
          5. Et si on lâchait un peu prise ?
        </Title>
        <Text component="p">
          Le vrai problème, c’est souvent ce mot : "performance". Oubliez cette idée d’objectif à atteindre, et concentrez-vous sur l’instant, sur les sensations, sur la complicité. Prenez exemple sur la slow life : moins d’attentes, plus de spontanéité.
        </Text>
      </section>

      <Divider my="xl" />

      <footer>
        <Text component="p" ta="center" w={600}>
          En conclusion : soyez imparfait, et c’est très bien comme ça.
        </Text>
        <Text component="p" ta="center" size="sm" color="dimmed">
          La vie, ce n’est pas Instagram. L’intimité non plus. Mais avec un allié comme <Anchor href="#zigouplex">Zigouplex</Anchor>, chaque pas vers la sérénité est une victoire.
        </Text>
      </footer>
    </Container>
  ),
};

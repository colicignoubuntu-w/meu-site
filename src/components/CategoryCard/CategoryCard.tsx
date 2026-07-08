import { Card, CardMedia, CardContent, Typography } from "@mui/material";

type Props = {
  name: string;
  image: string;
};

function CategoryCard({ name, image }: Props) {
  return (
    <Card
      sx={{
        borderRadius: 3,
        transition: ".3s",
        cursor: "pointer",

        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: 8,
        },
      }}
    >
      <CardMedia
        component="img"
        height="240"
        image={image}
      />

      <CardContent>
        <Typography
          align="center"
          variant="h6"
          fontWeight="bold"
        >
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CategoryCard;
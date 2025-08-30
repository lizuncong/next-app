import { imgData } from '../../../data';
import Container from './Container';
export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const photo = imgData.find(i => i.id === id)!;
  return <Container photo={photo} />;
}

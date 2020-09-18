import faker from 'faker'

import { BannerProps } from '@/components/Banner'

export const mockBannerData: BannerProps = {
  img: faker.image.imageUrl(),
  title: faker.random.words(3),
  subtitle: faker.random.words(8),
  buttonLabel: faker.random.words(2),
  buttonLink: faker.internet.url()
}

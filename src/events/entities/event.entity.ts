import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';

@Index(['name', 'type']) // Composite index that contains Multiple columns
@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Index() // To help speed up this search, we can define an index on the “name” column using the @Index decorator.
  @Column()
  name: string;

  @Column('json')
  payload: Record<string, any>;
}

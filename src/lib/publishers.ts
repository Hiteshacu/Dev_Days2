/**
 * Data-access helpers for retrieving publishers from the local SQLite database.
 *
 * These helpers accept an injectable Drizzle database client so they can be
 * reused by build-time pages and exercised with an in-memory test database.
 */
import { asc } from 'drizzle-orm';
import { publishers } from '../../db/schema';
import type { Publisher } from '../types/game';
import type { Database } from './db';

/**
 * Retrieves all publishers ordered alphabetically by name.
 *
 * @param db - Drizzle database client used to query the publishers table.
 * @returns A promise that resolves to the publishers ordered by name.
 */
export async function getAllPublishers(db: Database): Promise<Publisher[]> {
    return db
        .select({ id: publishers.id, name: publishers.name })
        .from(publishers)
        .orderBy(asc(publishers.name));
}

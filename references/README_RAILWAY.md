# Deploy and Host aircache on Railway

**Aircache** is an open-source high-performance cache service that makes your Airtable API 3.2x faster with zero-downtime updates, reducing latency by 63.6% and eliminating rate limits through intelligent SQLite caching.

## About Hosting aircache

Hosting aircache on Railway provides enterprise-grade performance for your Airtable data with minimal configuration. The service uses a dual-database strategy for seamless cache updates, automatically syncs your Airtable data, handles file attachments with deduplication, and serves cached data through a high-performance REST API. Railway's persistent storage ensures your SQLite databases and attachment files are preserved across deployments, while the platform's auto-scaling capabilities handle traffic spikes efficiently.

## Common Use Cases

- **High-Traffic Applications** - Serve Airtable data to thousands of users without hitting API rate limits
- **Real-time Dashboards** - Power fast-loading business intelligence dashboards with sub-100ms response times  
- **Mobile Apps** - Provide offline-capable data access with intelligent background synchronization
- **E-commerce Platforms** - Cache product catalogs and inventory data for instant user experiences

## Dependencies for aircache Hosting

- **Airtable Personal Access Token** - Required for API authentication and data synchronization
- **Airtable Base ID** - The specific base containing your data to cache
- **Bearer Token** - Custom API token for securing your aircache endpoints
- **Persistent Storage** - For SQLite databases and attachment files

### Deployment Dependencies

- [Airtable Personal Access Token Setup](https://airtable.com/create/tokens)
- [Airtable Base ID Documentation](https://airtable.com/developers/web/api/introduction)

### Implementation Details

```bash
# Environment variables required
AIRTABLE_PERSONAL_TOKEN=pat_your_token_here
AIRTABLE_BASE_ID=app_your_base_id  
BEARER_TOKEN=your_secure_api_token
PORT=3000
REFRESH_INTERVAL=86400
```

The service automatically creates SQLite databases, indexes data for optimal performance, and provides REST endpoints at `/api/tables/:table` for cached data access.

## Why Deploy aircache on Railway?

Railway is a singular platform to deploy your infrastructure stack. Railway will host your infrastructure so you don't have to deal with configuration, while allowing you to vertically and horizontally scale it.

By deploying aircache on Railway, you are one step closer to supporting a complete full-stack application with minimal burden. Host your servers, databases, AI agents, and more on Railway.
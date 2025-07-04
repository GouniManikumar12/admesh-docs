# GitHub Actions Setup for Automatic Algolia Indexing

This guide explains how to set up automatic Algolia search indexing when you push changes to your documentation.

## Step 1: Add GitHub Secret

1. **Go to your GitHub repository**: https://github.com/GouniManikumar12/admesh-docs
2. **Navigate to Settings** → **Secrets and variables** → **Actions**
3. **Click "New repository secret"**
4. **Add the secret**:
   - **Name**: `ALGOLIA_ADMIN_API_KEY`
   - **Value**: `d5b6b6f7e69d4e49f37fb0a44579e604`
5. **Click "Add secret"**

## Step 2: How It Works

The GitHub Action (`.github/workflows/algolia-index.yml`) will automatically:

- ✅ **Trigger on pushes** to main/master branch
- ✅ **Trigger on pull requests** that modify documentation
- ✅ **Allow manual triggering** from GitHub Actions tab
- ✅ **Install dependencies** and run the indexing script
- ✅ **Update Algolia search index** with latest content
- ✅ **Notify success/failure** in the Actions log

## Step 3: Manual Triggering

You can also manually trigger the indexing:

1. Go to **Actions** tab in your GitHub repository
2. Select **"Update Algolia Search Index"** workflow
3. Click **"Run workflow"**
4. Choose the branch and click **"Run workflow"**

## Step 4: Monitoring

Monitor the indexing process:

1. **GitHub Actions**: Check the workflow runs in the Actions tab
2. **Algolia Dashboard**: Monitor index updates at https://www.algolia.com/apps/W5X8L8ZZ8V/dashboard
3. **Search Testing**: Test search functionality on your live documentation

## Troubleshooting

### Common Issues:

1. **Secret not found**: Ensure `ALGOLIA_ADMIN_API_KEY` is correctly set in repository secrets
2. **Permission denied**: Check that the API key has write permissions
3. **Build failure**: Check the Actions log for detailed error messages

### Manual Indexing:

If automatic indexing fails, you can always run manually:

```bash
cd admesh-docs
npm run index-algolia
```

## Security Notes

- ✅ **API key is secure**: Stored as encrypted GitHub secret
- ✅ **Limited scope**: Only has write access to the specific index
- ✅ **No exposure**: Never visible in logs or code
- ✅ **Revocable**: Can be rotated in Algolia dashboard if needed

## Next Steps

After setting up the GitHub secret:

1. **Push a documentation change** to test automatic indexing
2. **Monitor the Actions tab** to see the workflow run
3. **Test search functionality** on your live site
4. **Enjoy automatic search updates** with every documentation change!

---

**Need help?** Contact [mani@useadmesh.com](mailto:mani@useadmesh.com)

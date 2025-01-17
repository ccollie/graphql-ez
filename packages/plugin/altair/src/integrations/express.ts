import { withTrailingSlash } from '@graphql-ez/utils/url';

import type { InternalAppBuildContext, InternalAppBuildIntegrationContext } from 'graphql-ez';

export function handleExpress(
  ctx: InternalAppBuildContext,
  instance: NonNullable<InternalAppBuildIntegrationContext['express']>
) {
  if (!ctx.altair) return;

  const path = ctx.altair.path;

  const handler = ctx.altair.handler({ ...ctx.altair.options, path });

  instance.router.get([path, `${withTrailingSlash(ctx.altair.baseURL)}*`], async (req, res) => {
    await handler(req, res);
  });
}

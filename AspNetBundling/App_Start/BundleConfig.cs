﻿using System.Web.Optimization;
using AspNetBundling;

namespace AspNetBundle
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/site.css"));

            bundles.Add(new ScriptBundle("~/Scripts/stacktrace").Include(
                "~/Scripts/stacktrace.js"));

            bundles.Add(new ScriptBundle("~/Scripts/stacktrace2").Include(
                "~/Scripts/stackframe.js",
                "~/Scripts/error-stack-parser.js",
                "~/Scripts/stacktrace-gps.js"));

            bundles.Add(new ScriptWithSourceMapBundle("~/Scripts/app").Include(
                "~/Scripts/log.js",
                "~/Scripts/app.js"));

            //BundleTable.EnableOptimizations = true;
        }
    }
}

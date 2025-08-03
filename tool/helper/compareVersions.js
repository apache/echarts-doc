
/**
 * Version format and comparison rules are based on Semver 2.0,
 * but allow `1.1.1.1` (more than 3 parts), useful in practice.
 *
 * @return
 *  - `-1` if v1 < v2;
 *  - `0` if v1 == v2;
 *  - `1` if v1 > v2;
 *  - `null` if v1 or v2 is invalid.
 *
 * --- Test Cases ---
 *  expect(compareVersions('6.0', '6.0.1')).toEqual(-1);
 *  expect(compareVersions('6', '6.0.1')).toEqual(-1);
 *  expect(compareVersions(6, '6.0.1')).toEqual(-1);
 *  expect(compareVersions('6.1', '6.0.1'));  // 1
 *  expect(compareVersions('7', '6.0.1')).toEqual(1);
 *  expect(compareVersions(7, '6.0.1')).toEqual(1);
 *  expect(compareVersions('6.1', '6.1')).toEqual(0);
 *  expect(compareVersions('6.0', '6.1.0')).toEqual(-1);
 *  expect(compareVersions('6.2.9', '6.2.12')).toEqual(-1);
 *  expect(compareVersions('6.2.9', '6.2.90')).toEqual(-1);
 *  expect(compareVersions('6.12.1', '6.9.1')).toEqual(1);
 *  expect(compareVersions('6.90.1', '6.9.1')).toEqual(1);
 *  expect(compareVersions('6.1.1.3', '6.1.1.4')).toEqual(-1);
 *  expect(compareVersions('6.0.0-beta.1', '6.0.0-beta.2')).toEqual(-1);
 *  expect(compareVersions('6.0.0-beta.1', '6.1')).toEqual(-1);
 *  expect(compareVersions('6.0.0-beta.1', '6.0.0-1.0')).toEqual(1); // when pre-release mixed compare: numeric < alphanumeric
 *  expect(compareVersions('6.0.0.1-beta.1', '6.0.0.1-beta.2')).toEqual(-1);
 *  expect(compareVersions('6.1-beta.1', '6.1-beta.2')).toEqual(-1);
 *  expect(compareVersions('6.1-beta-.1', '6.1-beta-.2')).toEqual(-1);
 *  expect(compareVersions('6.1-beta-d.1', '6.1-beta-d.2')).toEqual(-1);
 *  expect(compareVersions('6-beta.1', '6-beta.2')).toEqual(-1);
 *  expect(compareVersions('6.0.0', '6.0.0-beta.1')).toEqual(1);
 *  expect(compareVersions('6.0.0-alpha', '6.0.0-beta')).toEqual(-1);
 *  expect(compareVersions('6.0.0-alpha', '6.0.0-alpha')).toEqual(0);
 *  expect(compareVersions('6.0.0-alpha', '6.0.0-beta')).toEqual(-1);
 *  expect(compareVersions('6.0.0-beta', '6.0.0-rc')).toEqual(-1);
 *  expect(compareVersions('1.0.0-zeta', '1.0.0-rc')).toEqual(1); // pre-release is compared in ASCII Lexical Order.);
 *  expect(compareVersions('6.0.0-a.b.c', '6.0.0-a.b.d')).toEqual(-1);
 *  expect(compareVersions('6.0.0-9', '6.0.0-12')).toEqual(-1);
 *  expect(compareVersions('6.0.0-9.b', '6.0.0-12.a')).toEqual(-1);
 *  expect(compareVersions('1.2.3+build.123', '1.2.3+build.125')).toEqual(0);
 *  expect(compareVersions('1.2.4+build.123', '1.2.3+build.125')).toEqual(1);
 *  expect(compareVersions('1.2.3-alpha.1+build.123', '1.2.3-alpha.1+build.125')).toEqual(0);
 *  expect(compareVersions('1.2.3-alpha.2+build.123', '1.2.3-alpha.1+build.125')).toEqual(1);
 *  expect(compareVersions('1.2.4-alpha.2+build.123', '1.2.3-alpha.3+build.125')).toEqual(1);
 *  expect(compareVersions('6.0.0', '6.0.0')).toEqual(0);
 *  expect(compareVersions('6.0.0-beta.1', '6.0.0-rc.1')).toEqual(-1);
 *  expect(compareVersions(null, '6.0.1')).toEqual(null); // any invalid, return null/undefined
 *  expect(compareVersions('abc', '6.0.0-abc.1')).toEqual(null);
 *  expect(compareVersions(true, '6.0.0-abc.1')).toEqual(null);
 *  expect(compareVersions('6.0.0-abc.01', '6.0.0-abc.01')).toEqual(null); // invalid pre-release part
 *  expect(compareVersions('6.a.b', '6.0.0')).toEqual(null);
 *  expect(compareVersions('6.a.b', '6.a.b')).toEqual(null);
 *  expect(compareVersions('6.0.1a', '6.0.1a')).toEqual(null);
 *  expect(compareVersions('6.0.1-', '6.0.1-')).toEqual(null);
 *  expect(compareVersions('06', '6')).toEqual(null);
 *  expect(compareVersions('6 .0.1', '6 .0.1')).toEqual(null);
 *  expect(compareVersions('6..1', '6..1')).toEqual(null);
 *  expect(compareVersions('  6.0.1  ', '6.0.1')).toEqual(0);
 */
exports.compareVersions = function (v1, v2) {
    if (typeof v1 === 'number') {
        v1 += '';
    }
    if (typeof v2 === 'number') {
        v2 += '';
    }
    // PENDING: use String#trim() at the start and end?
    // Note: a `1.0-abc-d.1` is also a valid semver version, therefore, use regexp, rather than simply split by `-`.
    const semverExtReg = /^\s*((?:0|[1-9]\d*)(?:\.(?:0|[1-9]\d*))*)(?:-((?:0|[1-9A-Za-z-][0-9A-Za-z-]*)(?:\.(?:0|[1-9A-Za-z-][0-9A-Za-z-]*))*))?(?:\+([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?\s*$/;

    function parse(versionInput) {
        if (typeof versionInput === 'number') { // Only tolerate numbers.
            versionInput += '';
        }
        if (typeof versionInput !== 'string') {
            return null; // Invalid input
        }
        const matched = versionInput.match(semverExtReg);
        if (!matched) {
            return null; // Invalid format
        }
        const main = matched[1].split('.');
        const preRelease = matched[2] ? matched[2].split('.') : [];
        // The "build meta part" should be ignored in comparison.
        return {main, preRelease};
    }

    function preReleasePartNumOrAlpha(part) {
        // By semver, numeric < alphanumeric.
        return /^\d+$/.test(part) ? 1 : 2;
    }

    const parsed1 = parse(v1);
    const parsed2 = parse(v2);
    if (!parsed1 || !parsed2) {
        return null; // Invalid input
    }

    const main1 = parsed1.main;
    const main2 = parsed2.main;
    const main1Len = main1.length;
    const main2Len = main2.length;
    // Compare main parts
    let count = Math.min(main1Len, main2Len);
    for (let i = 0; i < count; i++) {
        const main1Part = Number(main1[i]);
        const main2Part = Number(main2[i]);
        if (main1Part !== main2Part) {
            return main1Part < main2Part ? -1 : 1;
        }
    }
    if (main1Len !== main2Len) {
        return main1Len < main2Len ? -1 : 1;
    }

    const pre1 = parsed1.preRelease;
    const pre2 = parsed2.preRelease;
    const pre1Len = pre1.length;
    const pre2Len = pre2.length;
    if (!pre1Len && pre2Len) { // normal > pre-release
        return 1;
    }
    if (pre1Len && !pre2Len) { // pre-release < normal
        return -1;
    }

    count = Math.min(pre1Len, pre2Len);
    for (let i = 0; i < count; i++) {
        let prePart1 = pre1[i];
        let prePart2 = pre2[i];
        const numOrAlpha1 = preReleasePartNumOrAlpha(prePart1);
        const numOrAlpha2 = preReleasePartNumOrAlpha(prePart2);
        if (numOrAlpha1 !== numOrAlpha2) {
            return numOrAlpha1 - numOrAlpha2;
        }
        if (numOrAlpha1 === 1) {
            prePart1 = Number(prePart1);
            prePart2 = Number(prePart2);
        }
        // If both numeric, compare as numbers.
        // else if both alphanumeric, compare as ASCII lexical order.
        if (prePart1 !== prePart2) {
            return prePart1 < prePart2 ? -1 : 1;
        }
    }
    if (pre1Len !== pre2Len) {
        return pre1Len < pre2Len ? -1 : 1;
    }
    return 0;
}
